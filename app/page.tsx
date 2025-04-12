"use client"
// SimulatorPage.tsx
import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Select,
  MenuItem,
  Button,
  TextField,
  Tabs,
  Tab,
} from '@mui/material';

import { 武器装飾品, 防具装飾品, 護石 } from './itemsData'; // データをインポート

interface Item {
  name: string;
  quantity: number;
}

const SimulatorPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const [items武器装飾品, setItems武器装飾品] = useState<Item[]>(武器装飾品); // 初期値にインポートしたデータを使用
  const [items防具装飾品, setItems防具装飾品] = useState<Item[]>(防具装飾品);
  const [items護石, setItems護石] = useState<Item[]>(護石);

  const [filterText, setFilterText] = useState('');

  const currentItems =
    activeTab === 0 ? items武器装飾品 : activeTab === 1 ? items防具装飾品 : items護石;

  const setCurrentItems =
    activeTab === 0 ? setItems武器装飾品 : activeTab === 1 ? setItems防具装飾品 : setItems護石;

  const customSort = (a: Item, b: Item) => {
    const filterIndexA = a.name.indexOf(filterText);
    const filterIndexB = b.name.indexOf(filterText);
    const dotIndexA = a.name.indexOf('・');
    const dotIndexB = b.name.indexOf('・');

    // 1. 「・」が無いアイテムを優先
    const hasDotA = dotIndexA !== -1;
    const hasDotB = dotIndexB !== -1;
    if (!hasDotA && hasDotB) return -1; // Aには「・」がない、Bには「・」がある → Aを優先
    if (hasDotB && !hasDotA) return 1; // Bには「・」がない、Aには「・」がある → Bを優先

    // 2. 「・」の前にフィルタ文字列があるアイテムを次に
    const isFilterBeforeDotA = filterIndexA !== -1 && (!hasDotA || filterIndexA < dotIndexA);
    const isFilterBeforeDotB = filterIndexB !== -1 && (!hasDotB || filterIndexB < dotIndexB);
    if (isFilterBeforeDotA && !isFilterBeforeDotB) return -1; // Aが優先
    if (isFilterBeforeDotB && !isFilterBeforeDotA) return 1;  // Bが優先

    // 3. 「・」の後にフィルタ文字列があるアイテムを最後に
    const isFilterAfterDotA = filterIndexA !== -1 && hasDotA && filterIndexA > dotIndexA;
    const isFilterAfterDotB = filterIndexB !== -1 && hasDotB && filterIndexB > dotIndexB;
    if (isFilterAfterDotA && !isFilterAfterDotB) return 1; // Aが後
    if (isFilterAfterDotB && !isFilterAfterDotA) return -1; // Bが後

    // 4. 同じ条件内では名前の文字列順でソート
    return b.name.localeCompare(b.name);
  };

  // ローカルストレージからデータを読み込む
  useEffect(() => {
    const stored武器装飾品 = localStorage.getItem('items武器装飾品');
    const stored防具装飾品 = localStorage.getItem('items防具装飾品');
    const stored護石 = localStorage.getItem('items護石');
    if (stored武器装飾品) setItems武器装飾品(JSON.parse(stored武器装飾品));
    if (stored防具装飾品) setItems防具装飾品(JSON.parse(stored防具装飾品));
    if (stored護石) setItems護石(JSON.parse(stored護石));
  }, []);

  // ローカルストレージにデータを保存
  useEffect(() => {
    localStorage.setItem('items武器装飾品', JSON.stringify(items武器装飾品));
  }, [items武器装飾品]);

  useEffect(() => {
    localStorage.setItem('items防具装飾品', JSON.stringify(items防具装飾品));
  }, [items防具装飾品]);

  useEffect(() => {
    localStorage.setItem('items護石', JSON.stringify(items護石));
  }, [items護石]);

  const handleQuantityChange = (originalIndex: number, quantity: number) => {
    setCurrentItems((prevItems) =>
      prevItems.map((item, index) =>
        index === originalIndex ? { ...item, quantity } : item
      )
    );
  };

  // 統合ロジック
  const mergeItems = (defaultItems: Item[], importedItems: Item[]): Item[] => {
    const mergedItems = defaultItems.map((defaultItem) => {
      const importedItem = importedItems.find((item) => item.name === defaultItem.name);
      return importedItem ? { ...defaultItem, quantity: importedItem.quantity } : defaultItem;
    });

    const additionalItems = importedItems.filter(
      (importedItem) => !defaultItems.some((defaultItem) => defaultItem.name === importedItem.name)
    );

    return [...mergedItems, ...additionalItems];
  };

  // エクスポート機能
  const exportData = () => {
    const data = {
      items武器装飾品,
      items防具装飾品,
      items護石,
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'itemsData.json';
    link.click();
  };

  // インポート機能
  const importData = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      try {
        const importedData = JSON.parse(reader.result as string);

        setItems武器装飾品((prev) =>
          mergeItems(prev, importedData.items武器装飾品 || [])
        );
        setItems防具装飾品((prev) =>
          mergeItems(prev, importedData.items防具装飾品 || [])
        );
        setItems護石((prev) => mergeItems(prev, importedData.items護石 || []));
      } catch (error) {
        console.error('インポートに失敗しました:', error);
      }
    };

    reader.readAsText(file);
  };

  const filteredItems = currentItems
    .map((item, index) => ({
      ...item,
      originalIndex: index,
    }))
    .filter((item) => item.name.includes(filterText))
    .sort(customSort);

  return (
    <Container
      sx={{
        mt: 4,
        backgroundColor: '#fff7f0',
        color: '#333',
        padding: 4,
        borderRadius: 4,
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
      }}
    >
    <Box
      sx={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        backgroundColor: '#fff7f0',
        padding: 2,
        // boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          textAlign: 'center',
          color: '#f04e31',
          fontWeight: 'bold',
        }}
      >
        モンハンワイルズ
      </Typography>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          textAlign: 'center',
          color: '#f04e31',
          fontWeight: 'bold',
        }}
      >
        アイテム記録
      </Typography>

      <Tabs
        value={activeTab}
        onChange={(e, newValue) => setActiveTab(newValue)}
        indicatorColor="secondary"
        textColor="inherit"
        centered
        sx={{
          '.MuiTab-root': {
            fontWeight: 'bold',
          },
          '.Mui-selected': {
            color: '#f04e31',
          },
        }}
      >
        <Tab label="武器装飾品" />
        <Tab label="防具装飾品" />
        <Tab label="護石" />
      </Tabs>

      <TextField
        label="アイテム名でフィルタ"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
        fullWidth
        sx={{
          mb: 3,
          backgroundColor: '#ffffff',
          borderRadius: 2,
        }}
      />
    </Box>

      <Box sx={{ mb: 3 }}>
        {filteredItems.map((item) => (
          <Grid
            key={item.originalIndex}
            container
            spacing={1}
            alignItems="center"
            sx={{
              py: 0.2,
              px: 1,
              borderRadius: 1,
              backgroundColor: '#fff7f0',
              mb: 0.1,
            }}
          >
            <Grid item xs={2}>
              <Typography
                variant="body1"
                sx={{
                  fontWeight: 'bold',
                  color: '#f04e31',
                }}
              >
                {item.name}
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Select
                value={item.quantity}
                onChange={(e) =>
                  handleQuantityChange(item.originalIndex, Number(e.target.value))
                }
                fullWidth
                sx={{
                  backgroundColor: '#fff',
                  borderRadius: 2,
                }}
              >
                {Array.from({ length: 11 }, (_, i) => (
                  <MenuItem key={i} value={i}>
                    {i}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
          </Grid>
        ))}
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3 }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#f04e31',
            color: '#fff',
            '&:hover': {
              backgroundColor: '#d13d26',
            },
          }}
          onClick={exportData}
        >
          エクスポート
        </Button>
        <Button
          variant="contained"
          component="label"
          sx={{
            backgroundColor: '#f04e31',
            color: '#fff',
            '&:hover': {
              backgroundColor: '#d13d26',
            },
          }}
        >
          インポート
          <input
            type="file"
            hidden
            accept="application/json"
            onChange={importData}
          />
        </Button>
      </Box>
    </Container>
  );
};

export default SimulatorPage;
