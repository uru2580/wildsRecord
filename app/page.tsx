'use client';

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

interface Item {
  name: string;
  quantity: number;
}

const SimulatorPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const [items武器装飾品, setItems武器装飾品] = useState<Item[]>([
    { name: '攻撃珠【1】', quantity: 0 },
    { name: '攻撃珠Ⅱ【2】', quantity: 0 },
    { name: '攻撃珠Ⅲ【3】', quantity: 0 },
    { name: '逆上珠【2】', quantity: 0 },
    { name: '反攻珠【3】', quantity: 0 },
    { name: '守勢珠【1】', quantity: 0 },
    { name: '守勢珠Ⅱ【2】', quantity: 0 },
    { name: '守勢珠Ⅲ【3】', quantity: 0 },
    { name: '守勢・火炎珠【3】', quantity: 0 },
    { name: '守勢・流水珠【3】', quantity: 0 },
    { name: '守勢・雷光珠【3】', quantity: 0 },
    { name: '守勢・氷結珠【3】', quantity: 0 },
    { name: '守勢・破龍珠【3】', quantity: 0 },
    { name: '守勢・匠珠【3】', quantity: 0 },
    { name: '守勢・鉄壁珠【3】', quantity: 0 },
    { name: '無傷珠【2】', quantity: 0 },
    { name: '逆襲珠【2】', quantity: 0 },
    { name: '達人珠【1】', quantity: 0 },
    { name: '達人珠Ⅱ【2】', quantity: 0 },
    { name: '達人珠Ⅲ【3】', quantity: 0 },
    { name: '超心珠【1】', quantity: 0 },
    { name: '超心珠Ⅱ【2】', quantity: 0 },
    { name: '超心珠Ⅲ【3】', quantity: 0 },
    { name: '痛撃珠【3】', quantity: 0 },
    { name: '抜刀珠【1】', quantity: 0 },
    { name: '抜刀珠Ⅱ【2】', quantity: 0 },
    { name: '抜刀珠Ⅲ【3】', quantity: 0 },
    { name: '渾身珠【2】', quantity: 0 },
    { name: '火炎珠【1】', quantity: 0 },
    { name: '火炎珠Ⅱ【2】', quantity: 0 },
    { name: '火炎珠Ⅲ【3】', quantity: 0 },
    { name: '火炎・守勢珠【3】', quantity: 0 },
    { name: '火炎・属会珠【3】', quantity: 0 },
    { name: '火炎・匠珠【3】', quantity: 0 },
    { name: '火炎・業物珠【3】', quantity: 0 },
    { name: '火炎・射法珠【3】', quantity: 0 },
    { name: '火炎・初弾珠【3】', quantity: 0 },
    { name: '火炎・積弾珠【3】', quantity: 0 },
    { name: '火炎・集中珠【3】', quantity: 0 },
    { name: '火炎・昂揚珠【3】', quantity: 0 },
    { name: '火炎・KO珠【3】', quantity: 0 },
    { name: '火炎・速変珠【3】', quantity: 0 },
    { name: '火炎・鉄壁珠【3】', quantity: 0 },
    { name: '火炎・強壁珠【3】', quantity: 0 },
    { name: '流水珠【1】', quantity: 0 },
    { name: '流水珠Ⅱ【2】', quantity: 0 },
    { name: '流水珠Ⅲ【3】', quantity: 0 },
    { name: '流水・守勢珠【3】', quantity: 0 },
    { name: '流水・属会珠【3】', quantity: 0 },
    { name: '流水・匠珠【3】', quantity: 0 },
    { name: '流水・業物珠【3】', quantity: 0 },
    { name: '流水・射法珠【3】', quantity: 0 },
    { name: '流水・初弾珠【3】', quantity: 0 },
    { name: '流水・積弾珠【3】', quantity: 0 },
    { name: '流水・集中珠【3】', quantity: 0 },
    { name: '流水・昂揚珠【3】', quantity: 0 },
    { name: '流水・KO珠【3】', quantity: 0 },
    { name: '流水・速変珠【3】', quantity: 0 },
    { name: '流水・鉄壁珠【3】', quantity: 0 },
    { name: '流水・強壁珠【3】', quantity: 0 },
    { name: '雷光珠【1】', quantity: 0 },
    { name: '雷光珠Ⅱ【2】', quantity: 0 },
    { name: '雷光珠Ⅲ【3】', quantity: 0 },
    { name: '雷光・守勢珠【3】', quantity: 0 },
    { name: '雷光・属会珠【3】', quantity: 0 },
    { name: '雷光・匠珠【3】', quantity: 0 },
    { name: '雷光・業物珠【3】', quantity: 0 },
    { name: '雷光・射法珠【3】', quantity: 0 },
    { name: '雷光・初弾珠【3】', quantity: 0 },
    { name: '雷光・積弾珠【3】', quantity: 0 },
    { name: '雷光・集中珠【3】', quantity: 0 },
    { name: '雷光・昂揚珠【3】', quantity: 0 },
    { name: '雷光・KO珠【3】', quantity: 0 },
    { name: '雷光・速変珠【3】', quantity: 0 },
    { name: '雷光・鉄壁珠【3】', quantity: 0 },
    { name: '雷光・強壁珠【3】', quantity: 0 },
    { name: '氷結珠【1】', quantity: 0 },
    { name: '氷結珠Ⅱ【2】', quantity: 0 },
    { name: '氷結珠Ⅲ【3】', quantity: 0 },
    { name: '氷結・守勢珠【3】', quantity: 0 },
    { name: '氷結・属会珠【3】', quantity: 0 },
    { name: '氷結・匠珠【3】', quantity: 0 },
    { name: '氷結・業物珠【3】', quantity: 0 },
    { name: '氷結・射法珠【3】', quantity: 0 },
    { name: '氷結・初弾珠【3】', quantity: 0 },
    { name: '氷結・積弾珠【3】', quantity: 0 },
    { name: '氷結・集中珠【3】', quantity: 0 },
    { name: '氷結・昂揚珠【3】', quantity: 0 },
    { name: '氷結・KO珠【3】', quantity: 0 },
    { name: '氷結・速変珠【3】', quantity: 0 },
    { name: '氷結・鉄壁珠【3】', quantity: 0 },
    { name: '氷結・強壁珠【3】', quantity: 0 },
    { name: '破龍珠【1】', quantity: 0 },
    { name: '破龍珠Ⅱ【2】', quantity: 0 },
    { name: '破龍珠Ⅲ【3】', quantity: 0 },
    { name: '破龍・守勢珠【3】', quantity: 0 },
    { name: '破龍・属会珠【3】', quantity: 0 },
    { name: '破龍・匠珠【3】', quantity: 0 },
    { name: '破龍・業物珠【3】', quantity: 0 },
    { name: '破龍・射法珠【3】', quantity: 0 },
    { name: '破龍・初弾珠【3】', quantity: 0 },
    { name: '破龍・積弾珠【3】', quantity: 0 },
    { name: '破龍・集中珠【3】', quantity: 0 },
    { name: '破龍・昂揚珠【3】', quantity: 0 },
    { name: '破龍・KO珠【3】', quantity: 0 },
    { name: '破龍・速変珠【3】', quantity: 0 },
    { name: '破龍・鉄壁珠【3】', quantity: 0 },
    { name: '破龍・強壁珠【3】', quantity: 0 },
    { name: '毒珠【1】', quantity: 0 },
    { name: '毒珠Ⅱ【2】', quantity: 0 },
    { name: '毒珠Ⅲ【3】', quantity: 0 },
    { name: '麻痺珠【1】', quantity: 0 },
    { name: '麻痺珠Ⅱ【2】', quantity: 0 },
    { name: '麻痺珠Ⅲ【3】', quantity: 0 },
    { name: '睡眠珠【1】', quantity: 0 },
    { name: '睡眠珠Ⅱ【2】', quantity: 0 },
    { name: '睡眠珠Ⅲ【3】', quantity: 0 },
    { name: '爆破珠【1】', quantity: 0 },
    { name: '爆破珠Ⅱ【2】', quantity: 0 },
    { name: '爆破珠Ⅲ【3】', quantity: 0 },
    { name: '属会珠【1】', quantity: 0 },
    { name: '属会珠Ⅱ【2】', quantity: 0 },
    { name: '属会珠Ⅲ【3】', quantity: 0 },
    { name: '属会・火炎珠【3】', quantity: 0 },
    { name: '属会・流水珠【3】', quantity: 0 },
    { name: '属会・氷結珠【3】', quantity: 0 },
    { name: '属会・雷光珠【3】', quantity: 0 },
    { name: '属会・破龍珠【3】', quantity: 0 },
    { name: '属会・匠珠【3】', quantity: 0 },
    { name: '属会・射法珠【3】', quantity: 0 },
    { name: '属会・KO珠【3】', quantity: 0 },
    { name: '属会・鉄壁珠【3】', quantity: 0 },
    { name: '特会珠【1】', quantity: 0 },
    { name: '特会珠Ⅱ【2】', quantity: 0 },
    { name: '特会珠Ⅲ【3】', quantity: 0 },
    { name: '特会・匠珠【3】', quantity: 0 },
    { name: '特会・射法珠【3】', quantity: 0 },
    { name: '特会・KO珠【3】', quantity: 0 },
    { name: '特会・鉄壁珠【3】', quantity: 0 },
    { name: '溜幅珠【1】', quantity: 0 },
    { name: '溜幅珠Ⅱ【2】', quantity: 0 },
    { name: '溜幅珠Ⅲ【3】', quantity: 0 },
    { name: '溜幅・匠珠【3】', quantity: 0 },
    { name: '溜幅・KO珠【3】', quantity: 0 },
    { name: '匠珠【1】', quantity: 0 },
    { name: '匠珠Ⅱ【2】', quantity: 0 },
    { name: '匠珠Ⅲ【3】', quantity: 0 },
    { name: '業物珠【1】', quantity: 0 },
    { name: '業物珠Ⅱ【2】', quantity: 0 },
    { name: '業物珠Ⅲ【3】', quantity: 0 },
    { name: '業物・火炎珠【3】', quantity: 0 },
    { name: '業物・流水珠【3】', quantity: 0 },
    { name: '業物・氷結珠【3】', quantity: 0 },
    { name: '業物・雷光珠【3】', quantity: 0 },
    { name: '業物・破龍珠【3】', quantity: 0 },
    { name: '業物・匠珠【3】', quantity: 0 },
    { name: '業物・KO珠【3】', quantity: 0 },
    { name: '業物・鉄壁珠【3】', quantity: 0 },
    { name: '剛刃珠【1】', quantity: 0 },
    { name: '剛刃珠Ⅱ【2】', quantity: 0 },
    { name: '剛刃珠Ⅲ【3】', quantity: 0 },
    { name: '心眼珠【1】', quantity: 0 },
    { name: '心眼珠Ⅱ【2】', quantity: 0 },
    { name: '心眼珠Ⅲ【3】', quantity: 0 },
    { name: '鈍器珠【1】', quantity: 0 },
    { name: '鈍器珠Ⅱ【2】', quantity: 0 },
    { name: '鈍器珠Ⅲ【3】', quantity: 0 },
    { name: '達芸珠【3】', quantity: 0 },
    { name: '強弾珠【3】', quantity: 0 },
    { name: '貫通珠【3】', quantity: 0 },
    { name: '散弾珠【3】', quantity: 0 },
    { name: '射法珠【1】', quantity: 0 },
    { name: '射法珠Ⅱ【2】', quantity: 0 },
    { name: '射法珠Ⅲ【3】', quantity: 0 },
    { name: '速射珠【3】', quantity: 0 },
    { name: '初弾珠【1】', quantity: 0 },
    { name: '初弾珠Ⅱ【2】', quantity: 0 },
    { name: '初弾珠Ⅲ【3】', quantity: 0 },
    { name: '初弾・火炎珠【3】', quantity: 0 },
    { name: '初弾・流水珠【3】', quantity: 0 },
    { name: '初弾・氷結珠【3】', quantity: 0 },
    { name: '初弾・雷光珠【3】', quantity: 0 },
    { name: '初弾・破龍珠【3】', quantity: 0 },
    { name: '初弾・射法珠【3】', quantity: 0 },
    { name: '初弾・鉄壁珠【3】', quantity: 0 },
    { name: '積弾珠【1】', quantity: 0 },
    { name: '積弾珠Ⅱ【2】', quantity: 0 },
    { name: '積弾珠Ⅲ【3】', quantity: 0 },
    { name: '積弾・火炎珠【3】', quantity: 0 },
    { name: '積弾・流水珠【3】', quantity: 0 },
    { name: '積弾・氷結珠【3】', quantity: 0 },
    { name: '積弾・雷光珠【3】', quantity: 0 },
    { name: '積弾・破龍珠【3】', quantity: 0 },
    { name: '積弾・射法珠【3】', quantity: 0 },
    { name: '積弾・鉄壁珠【3】', quantity: 0 },
    { name: '特射珠【1】', quantity: 0 },
    { name: '特射珠Ⅱ【2】', quantity: 0 },
    { name: '毒瓶珠【2】', quantity: 0 },
    { name: '痺瓶珠【3】', quantity: 0 },
    { name: '眠瓶珠【3】', quantity: 0 },
    { name: '爆瓶珠【2】', quantity: 0 },
    { name: '防御珠【1】', quantity: 0 },
    { name: '加護珠【1】', quantity: 0 },
    { name: '耐火珠【1】', quantity: 0 },
    { name: '耐水珠【1】', quantity: 0 },
    { name: '耐氷珠【1】', quantity: 0 },
    { name: '耐雷珠【1】', quantity: 0 },
    { name: '耐龍珠【1】', quantity: 0 },
    { name: '耐毒珠【1】', quantity: 0 },
    { name: '耐麻珠【1】', quantity: 0 },
    { name: '耐眠珠【1】', quantity: 0 },
    { name: '耐防珠【1】', quantity: 0 },
    { name: '耐絶珠【1】', quantity: 0 },
    { name: '耐裂珠【1】', quantity: 0 },
    { name: '耐拘珠【1】', quantity: 0 },
    { name: '耐爆珠【1】', quantity: 0 },
    { name: '耐臭珠【1】', quantity: 0 },
    { name: '適応珠【1】', quantity: 0 },
    { name: '治癒珠【1】', quantity: 0 },
    { name: '早復珠【1】', quantity: 0 },
    { name: '環境珠【1】', quantity: 0 },
    { name: '体術珠【1】', quantity: 0 },
    { name: '早気珠【2】', quantity: 0 },
    { name: '強走珠【1】', quantity: 0 },
    { name: '無食珠【1】', quantity: 0 },
    { name: '挑戦珠【3】', quantity: 0 },
    { name: '全開珠【3】', quantity: 0 },
    { name: '底力珠【2】', quantity: 0 },
    { name: '連撃珠【3】', quantity: 0 },
    { name: '攻勢珠【3】', quantity: 0 },
    { name: '集中珠【1】', quantity: 0 },
    { name: '集中珠Ⅱ【2】', quantity: 0 },
    { name: '集中珠Ⅲ【3】', quantity: 0 },
    { name: '集中・火炎珠【3】', quantity: 0 },
    { name: '集中・流水珠【3】', quantity: 0 },
    { name: '集中・氷結珠【3】', quantity: 0 },
    { name: '集中・雷光珠【3】', quantity: 0 },
    { name: '集中・破龍珠【3】', quantity: 0 },
    { name: '集中・匠珠【3】', quantity: 0 },
    { name: '集中・射法珠【3】', quantity: 0 },
    { name: '集中・KO珠【3】', quantity: 0 },
    { name: '昂揚珠【1】', quantity: 0 },
    { name: '昂揚珠Ⅱ【2】', quantity: 0 },
    { name: '昂揚珠Ⅲ【3】', quantity: 0 },
    { name: '昂揚・火炎珠【3】', quantity: 0 },
    { name: '昂揚・流水珠【3】', quantity: 0 },
    { name: '昂揚・氷結珠【3】', quantity: 0 },
    { name: '昂揚・雷光珠【3】', quantity: 0 },
    { name: '昂揚・破龍珠【3】', quantity: 0 },
    { name: '昂揚・匠珠【3】', quantity: 0 },
    { name: '抜打珠【1】', quantity: 0 },
    { name: '抜打珠Ⅱ【2】', quantity: 0 },
    { name: '抜打珠Ⅲ【3】', quantity: 0 },
    { name: '抜打・匠珠【3】', quantity: 0 },
    { name: '抜打・KO珠【3】', quantity: 0 },
    { name: '抜打・鉄壁珠【3】', quantity: 0 },
    { name: 'KO珠【1】', quantity: 0 },
    { name: 'KO珠Ⅱ【2】', quantity: 0 },
    { name: 'KO珠Ⅲ【3】', quantity: 0 },
    { name: '奪気珠【1】', quantity: 0 },
    { name: '奪気珠Ⅱ【2】', quantity: 0 },
    { name: '奪気珠Ⅲ【3】', quantity: 0 },
    { name: '砲術珠【1】', quantity: 0 },
    { name: '砲術珠Ⅱ【2】', quantity: 0 },
    { name: '砲術珠Ⅲ【3】', quantity: 0 },
    { name: '速変珠【1】', quantity: 0 },
    { name: '速変珠Ⅱ【2】', quantity: 0 },
    { name: '速変珠Ⅲ【3】', quantity: 0 },
    { name: '速変・火炎珠【3】', quantity: 0 },
    { name: '速変・流水珠【3】', quantity: 0 },
    { name: '速変・氷結珠【3】', quantity: 0 },
    { name: '速変・雷光珠【3】', quantity: 0 },
    { name: '速変・破龍珠【3】', quantity: 0 },
    { name: '速変・匠珠【3】', quantity: 0 },
    { name: '速変・KO珠【3】', quantity: 0 },
    { name: '速変・鉄壁珠【3】', quantity: 0 },
    { name: '重撃珠【2】', quantity: 0 },
    { name: '転福珠【2】', quantity: 0 },
    { name: '鼓笛珠【2】', quantity: 0 },
    { name: '鼓笛・攻撃珠【3】', quantity: 0 },
    { name: '鼓笛・達人珠【3】', quantity: 0 },
    { name: '鼓笛・抜刀珠【3】', quantity: 0 },
    { name: '鼓笛・匠珠【3】', quantity: 0 },
    { name: '鼓笛・KO珠【3】', quantity: 0 },
    { name: '溜打珠【2】', quantity: 0 },
    { name: '溜打・攻撃珠【3】', quantity: 0 },
    { name: '溜打・達人珠【3】', quantity: 0 },
    { name: '溜打・抜刀珠【3】', quantity: 0 },
    { name: '溜打・匠珠【3】', quantity: 0 },
    { name: '溜打・KO珠【3】', quantity: 0 },
    { name: '飛燕珠【2】', quantity: 0 },
    { name: '飛燕・攻撃珠【3】', quantity: 0 },
    { name: '飛燕・達人珠【3】', quantity: 0 },
    { name: '飛燕・抜刀珠【3】', quantity: 0 },
    { name: '飛燕・匠珠【3】', quantity: 0 },
    { name: '研鑽珠【1】', quantity: 0 },
    { name: '鉄壁珠【1】', quantity: 0 },
    { name: '鉄壁珠Ⅱ【2】', quantity: 0 },
    { name: '鉄壁珠Ⅲ【3】', quantity: 0 },
    { name: '回避珠【2】', quantity: 0 },
    { name: '跳躍珠【2】', quantity: 0 },
    { name: '防音珠【2】', quantity: 0 },
    { name: '強壁珠【1】', quantity: 0 },
    { name: '強壁珠Ⅱ【2】', quantity: 0 },
    { name: '強壁珠Ⅲ【3】', quantity: 0 },
    { name: '強壁・火炎珠【3】', quantity: 0 },
    { name: '強壁・流水珠【3】', quantity: 0 },
    { name: '強壁・氷結珠【3】', quantity: 0 },
    { name: '強壁・雷光珠【3】', quantity: 0 },
    { name: '強壁・破龍珠【3】', quantity: 0 },
    { name: '強壁・匠珠【3】', quantity: 0 },
    { name: '強壁・鉄壁珠【3】', quantity: 0 },
    { name: '速納珠【1】', quantity: 0 },
    { name: '防風珠【1】', quantity: 0 },
    { name: '耐震珠【1】', quantity: 0 },
    { name: '耐衝珠【1】', quantity: 0 },
    { name: '威嚇珠【1】', quantity: 0 },
    { name: '早食珠【1】', quantity: 0 },
    { name: '増弾珠【1】', quantity: 0 },
    { name: '増弾珠Ⅱ【2】', quantity: 0 },
    { name: '増弾・攻撃珠【3】', quantity: 0 },
    { name: '増弾・達人珠【3】', quantity: 0 },
    { name: '増弾・抜刀珠【3】', quantity: 0 },
    { name: '増弾・匠珠【3】', quantity: 0 },
    { name: '増弾・鉄壁珠【3】', quantity: 0 },
    { name: '緩衝珠【1】', quantity: 0 },
    { name: '飛込珠【1】', quantity: 0 },
    { name: '強跳珠【1】', quantity: 0 },
    { name: '友愛珠【1】', quantity: 0 },
    { name: '整備珠【2】', quantity: 0 },
    { name: '爆師珠【1】', quantity: 0 },
    { name: '茸好珠【2】', quantity: 0 },
    { name: '持続珠【1】', quantity: 0 },
    { name: '節食珠【1】', quantity: 0 },
    { name: '研磨珠【1】', quantity: 0 },
    { name: '研磨珠Ⅱ【2】', quantity: 0 },
    { name: '研磨・攻撃珠【3】', quantity: 0 },
    { name: '研磨・達人珠【3】', quantity: 0 },
    { name: '研磨・抜刀珠【3】', quantity: 0 },
    { name: '研磨・匠珠【3】', quantity: 0 },
    { name: '研磨・KO珠【3】', quantity: 0 },
    { name: '研磨・鉄壁珠【3】', quantity: 0 },
    { name: '植学珠【1】', quantity: 0 },
    { name: '地学珠【1】', quantity: 0 },
    { name: '標本珠【1】', quantity: 0 },
    { name: '沼渡珠【1】', quantity: 0 },
    { name: '狩人珠【1】', quantity: 0 },
    { name: '閃光珠【1】', quantity: 0 },
    { name: '登壁珠【1】', quantity: 0 },
    { name: '強毒・鉄壁珠【3】', quantity: 0 },
    { name: '強毒・KO珠【3】', quantity: 0 },
    { name: '強毒・射法珠【3】', quantity: 0 },
    { name: '強毒・匠珠【3】', quantity: 0 },
    { name: '強毒・抜刀珠【3】', quantity: 0 },
    { name: '強毒・達人珠【3】', quantity: 0 },
    { name: '強毒・攻撃珠【3】', quantity: 0 },
    { name: '強毒珠【2】', quantity: 0 },
    { name: '抗狂珠【1】', quantity: 0 },
    { name: '急襲珠【2】', quantity: 0 },
    { name: '刺撃珠【3】', quantity: 0 },
    { name: '疲瓶珠【2】', quantity: 0 },
  ]);

  const [items防具装飾品, setItems防具装飾品] = useState<Item[]>([
    { name: '逆上珠【2】', quantity: 0 },
    { name: '反攻珠【3】', quantity: 0 },
    { name: '無傷珠【2】', quantity: 0 },
    { name: '逆襲珠【2】', quantity: 0 },
    { name: '痛撃珠【3】', quantity: 0 },
    { name: '渾身珠【2】', quantity: 0 },
    { name: '防御珠【1】', quantity: 0 },
    { name: '加護珠【1】', quantity: 0 },
    { name: '耐火珠【1】', quantity: 0 },
    { name: '耐水珠【1】', quantity: 0 },
    { name: '耐氷珠【1】', quantity: 0 },
    { name: '耐雷珠【1】', quantity: 0 },
    { name: '耐龍珠【1】', quantity: 0 },
    { name: '耐毒珠【1】', quantity: 0 },
    { name: '耐麻珠【1】', quantity: 0 },
    { name: '耐眠珠【1】', quantity: 0 },
    { name: '耐防珠【1】', quantity: 0 },
    { name: '耐絶珠【1】', quantity: 0 },
    { name: '耐裂珠【1】', quantity: 0 },
    { name: '耐拘珠【1】', quantity: 0 },
    { name: '耐爆珠【1】', quantity: 0 },
    { name: '耐臭珠【1】', quantity: 0 },
    { name: '適応珠【1】', quantity: 0 },
    { name: '治癒珠【1】', quantity: 0 },
    { name: '早復珠【1】', quantity: 0 },
    { name: '環境珠【1】', quantity: 0 },
    { name: '体術珠【1】', quantity: 0 },
    { name: '早気珠【2】', quantity: 0 },
    { name: '強走珠【1】', quantity: 0 },
    { name: '無食珠【1】', quantity: 0 },
    { name: '挑戦珠【3】', quantity: 0 },
    { name: '全開珠【3】', quantity: 0 },
    { name: '底力珠【2】', quantity: 0 },
    { name: '連撃珠【3】', quantity: 0 },
    { name: '攻勢珠【3】', quantity: 0 },
    { name: '重撃珠【2】', quantity: 0 },
    { name: '転福珠【2】', quantity: 0 },
    { name: '研鑽珠【1】', quantity: 0 },
    { name: '回避珠【2】', quantity: 0 },
    { name: '跳躍珠【2】', quantity: 0 },
    { name: '防音珠【2】', quantity: 0 },
    { name: '速納珠【1】', quantity: 0 },
    { name: '防風珠【1】', quantity: 0 },
    { name: '耐震珠【1】', quantity: 0 },
    { name: '耐衝珠【1】', quantity: 0 },
    { name: '威嚇珠【1】', quantity: 0 },
    { name: '早食珠【1】', quantity: 0 },
    { name: '緩衝珠【1】', quantity: 0 },
    { name: '飛込珠【1】', quantity: 0 },
    { name: '強跳珠【1】', quantity: 0 },
    { name: '友愛珠【1】', quantity: 0 },
    { name: '整備珠【2】', quantity: 0 },
    { name: '爆師珠【1】', quantity: 0 },
    { name: '茸好珠【2】', quantity: 0 },
    { name: '持続珠【1】', quantity: 0 },
    { name: '節食珠【1】', quantity: 0 },
    { name: '植学珠【1】', quantity: 0 },
    { name: '地学珠【1】', quantity: 0 },
    { name: '標本珠【1】', quantity: 0 },
    { name: '沼渡珠【1】', quantity: 0 },
    { name: '狩人珠【1】', quantity: 0 },
    { name: '閃光珠【1】', quantity: 0 },
    { name: '登壁珠【1】', quantity: 0 },
    { name: '抗狂珠【1】', quantity: 0 },
    { name: '急襲珠【2】', quantity: 0 },
    { name: '刺撃珠【3】', quantity: 0 },
  ]);

  const [items護石, setItems護石] = useState<Item[]>([
    { name: '希望の護石', quantity: 0 },
    { name: '逆上の護石Ⅰ', quantity: 0 },
    { name: '逆上の護石Ⅱ', quantity: 0 },
    { name: '反攻の護石Ⅰ', quantity: 0 },
    { name: '反攻の護石Ⅱ', quantity: 0 },
    { name: '無傷の護石Ⅰ', quantity: 0 },
    { name: '無傷の護石Ⅱ', quantity: 0 },
    { name: '逆襲の護石Ⅰ', quantity: 0 },
    { name: '逆襲の護石Ⅱ', quantity: 0 },
    { name: '逆襲の護石Ⅲ', quantity: 0 },
    { name: '痛撃の護石Ⅰ', quantity: 0 },
    { name: '痛撃の護石Ⅱ', quantity: 0 },
    { name: '渾身の護石Ⅰ', quantity: 0 },
    { name: '渾身の護石Ⅱ', quantity: 0 },
    { name: '属変の護石Ⅰ', quantity: 0 },
    { name: '防御の護石Ⅰ', quantity: 0 },
    { name: '防御の護石Ⅱ', quantity: 0 },
    { name: '防御の護石Ⅲ', quantity: 0 },
    { name: '防御の護石Ⅳ', quantity: 0 },
    { name: '加護の護石Ⅰ', quantity: 0 },
    { name: '加護の護石Ⅱ', quantity: 0 },
    { name: '加護の護石Ⅲ', quantity: 0 },
    { name: '耐火の護石Ⅰ', quantity: 0 },
    { name: '耐火の護石Ⅱ', quantity: 0 },
    { name: '耐火の護石Ⅲ', quantity: 0 },
    { name: '耐水の護石Ⅰ', quantity: 0 },
    { name: '耐水の護石Ⅱ', quantity: 0 },
    { name: '耐水の護石Ⅲ', quantity: 0 },
    { name: '耐雷の護石Ⅰ', quantity: 0 },
    { name: '耐雷の護石Ⅱ', quantity: 0 },
    { name: '耐雷の護石Ⅲ', quantity: 0 },
    { name: '耐氷の護石Ⅰ', quantity: 0 },
    { name: '耐氷の護石Ⅱ', quantity: 0 },
    { name: '耐氷の護石Ⅲ', quantity: 0 },
    { name: '耐龍の護石Ⅰ', quantity: 0 },
    { name: '耐龍の護石Ⅱ', quantity: 0 },
    { name: '耐龍の護石Ⅲ', quantity: 0 },
    { name: '耐毒の護石Ⅰ', quantity: 0 },
    { name: '耐毒の護石Ⅱ', quantity: 0 },
    { name: '耐毒の護石Ⅲ', quantity: 0 },
    { name: '耐麻の護石Ⅰ', quantity: 0 },
    { name: '耐麻の護石Ⅱ', quantity: 0 },
    { name: '耐麻の護石Ⅲ', quantity: 0 },
    { name: '耐眠の護石Ⅰ', quantity: 0 },
    { name: '耐眠の護石Ⅱ', quantity: 0 },
    { name: '耐眠の護石Ⅲ', quantity: 0 },
    { name: '耐防の護石Ⅰ', quantity: 0 },
    { name: '耐防の護石Ⅱ', quantity: 0 },
    { name: '耐防の護石Ⅲ', quantity: 0 },
    { name: '耐属の護石Ⅰ', quantity: 0 },
    { name: '耐属の護石Ⅱ', quantity: 0 },
    { name: '耐絶の護石Ⅰ', quantity: 0 },
    { name: '耐絶の護石Ⅱ', quantity: 0 },
    { name: '耐絶の護石Ⅲ', quantity: 0 },
    { name: '耐裂の護石Ⅰ', quantity: 0 },
    { name: '耐裂の護石Ⅱ', quantity: 0 },
    { name: '耐裂の護石Ⅲ', quantity: 0 },
    { name: '耐拘の護石Ⅰ', quantity: 0 },
    { name: '耐拘の護石Ⅱ', quantity: 0 },
    { name: '耐拘の護石Ⅲ', quantity: 0 },
    { name: '耐爆の護石Ⅰ', quantity: 0 },
    { name: '耐爆の護石Ⅱ', quantity: 0 },
    { name: '耐爆の護石Ⅲ', quantity: 0 },
    { name: '治癒の護石Ⅰ', quantity: 0 },
    { name: '治癒の護石Ⅱ', quantity: 0 },
    { name: '治癒の護石Ⅲ', quantity: 0 },
    { name: '早復の護石Ⅰ', quantity: 0 },
    { name: '早復の護石Ⅱ', quantity: 0 },
    { name: '早復の護石Ⅲ', quantity: 0 },
    { name: '環境の護石Ⅰ', quantity: 0 },
    { name: '環境の護石Ⅱ', quantity: 0 },
    { name: '環境の護石Ⅲ', quantity: 0 },
    { name: '体術の護石Ⅰ', quantity: 0 },
    { name: '体術の護石Ⅱ', quantity: 0 },
    { name: '体術の護石Ⅲ', quantity: 0 },
    { name: '体術の護石Ⅳ', quantity: 0 },
    { name: '早気の護石Ⅰ', quantity: 0 },
    { name: '早気の護石Ⅱ', quantity: 0 },
    { name: '早気の護石Ⅲ', quantity: 0 },
    { name: '強走の護石Ⅰ', quantity: 0 },
    { name: '強走の護石Ⅱ', quantity: 0 },
    { name: '強走の護石Ⅲ', quantity: 0 },
    { name: '無食の護石Ⅰ', quantity: 0 },
    { name: '無食の護石Ⅱ', quantity: 0 },
    { name: '無食の護石Ⅲ', quantity: 0 },
    { name: '挑戦の護石Ⅰ', quantity: 0 },
    { name: '挑戦の護石Ⅱ', quantity: 0 },
    { name: '全開の護石Ⅰ', quantity: 0 },
    { name: '全開の護石Ⅱ', quantity: 0 },
    { name: '底力の護石Ⅰ', quantity: 0 },
    { name: '底力の護石Ⅱ', quantity: 0 },
    { name: '底力の護石Ⅲ', quantity: 0 },
    { name: '攻勢の護石Ⅰ', quantity: 0 },
    { name: '攻勢の護石Ⅱ', quantity: 0 },
    { name: '連撃の護石Ⅰ', quantity: 0 },
    { name: '連撃の護石Ⅱ', quantity: 0 },
    { name: '鎖刃の護石Ⅰ', quantity: 0 },
    { name: '鎖刃の護石Ⅱ', quantity: 0 },
    { name: '重撃の護石Ⅰ', quantity: 0 },
    { name: '重撃の護石Ⅱ', quantity: 0 },
    { name: '転福の護石Ⅰ', quantity: 0 },
    { name: '転福の護石Ⅱ', quantity: 0 },
    { name: '急襲の護石Ⅰ', quantity: 0 },
    { name: '急襲の護石Ⅱ', quantity: 0 },
    { name: '抗狂の護石Ⅰ', quantity: 0 },
    { name: '抗狂の護石Ⅱ', quantity: 0 },
    { name: '抗狂の護石Ⅲ', quantity: 0 },
    { name: '属吸の護石Ⅰ', quantity: 0 },
    { name: '回避の護石Ⅰ', quantity: 0 },
    { name: '回避の護石Ⅱ', quantity: 0 },
    { name: '回避の護石Ⅲ', quantity: 0 },
    { name: '跳躍の護石Ⅰ', quantity: 0 },
    { name: '跳躍の護石Ⅱ', quantity: 0 },
    { name: '跳躍の護石Ⅲ', quantity: 0 },
    { name: '耳栓の護石Ⅰ', quantity: 0 },
    { name: '納刀の護石Ⅰ', quantity: 0 },
    { name: '納刀の護石Ⅱ', quantity: 0 },
    { name: '納刀の護石Ⅲ', quantity: 0 },
    { name: '防風の護石Ⅰ', quantity: 0 },
    { name: '防風の護石Ⅱ', quantity: 0 },
    { name: '防風の護石Ⅲ', quantity: 0 },
    { name: '耐震の護石Ⅰ', quantity: 0 },
    { name: '耐震の護石Ⅱ', quantity: 0 },
    { name: '耐震の護石Ⅲ', quantity: 0 },
    { name: '耐衝の護石Ⅰ', quantity: 0 },
    { name: '耐衝の護石Ⅱ', quantity: 0 },
    { name: '耐衝の護石Ⅲ', quantity: 0 },
    { name: '威嚇の護石Ⅰ', quantity: 0 },
    { name: '威嚇の護石Ⅱ', quantity: 0 },
    { name: '威嚇の護石Ⅲ', quantity: 0 },
    { name: '早食の護石Ⅰ', quantity: 0 },
    { name: '早食の護石Ⅱ', quantity: 0 },
    { name: '早食の護石Ⅲ', quantity: 0 },
    { name: '友愛の護石Ⅰ', quantity: 0 },
    { name: '友愛の護石Ⅱ', quantity: 0 },
    { name: '友愛の護石Ⅲ', quantity: 0 },
    { name: '友愛の護石Ⅳ', quantity: 0 },
    { name: '整備の護石Ⅰ', quantity: 0 },
    { name: '整備の護石Ⅱ', quantity: 0 },
    { name: '整備の護石Ⅲ', quantity: 0 },
    { name: '爆師の護石Ⅰ', quantity: 0 },
    { name: '爆師の護石Ⅱ', quantity: 0 },
    { name: '爆師の護石Ⅲ', quantity: 0 },
    { name: '茸好の護石Ⅰ', quantity: 0 },
    { name: '茸好の護石Ⅱ', quantity: 0 },
    { name: '茸好の護石Ⅲ', quantity: 0 },
    { name: '持続の護石Ⅰ', quantity: 0 },
    { name: '持続の護石Ⅱ', quantity: 0 },
    { name: '持続の護石Ⅲ', quantity: 0 },
    { name: '小食の護石Ⅰ', quantity: 0 },
    { name: '小食の護石Ⅱ', quantity: 0 },
    { name: '小食の護石Ⅲ', quantity: 0 },
    { name: '植学の護石Ⅰ', quantity: 0 },
    { name: '植学の護石Ⅱ', quantity: 0 },
    { name: '植学の護石Ⅲ', quantity: 0 },
    { name: '植学の護石Ⅳ', quantity: 0 },
    { name: '地学の護石Ⅰ', quantity: 0 },
    { name: '地学の護石Ⅱ', quantity: 0 },
    { name: '地学の護石Ⅲ', quantity: 0 },
  ]);

  const [filterText, setFilterText] = useState('');

  const currentItems =
    activeTab === 0 ? items武器装飾品 : activeTab === 1 ? items防具装飾品 : items護石;

  const setCurrentItems =
    activeTab === 0 ? setItems武器装飾品 : activeTab === 1 ? setItems防具装飾品 : setItems護石;

  useEffect(() => {
    const stored武器装飾品 = localStorage.getItem('items武器装飾品');
    const stored防具装飾品 = localStorage.getItem('items防具装飾品');
    const stored護石 = localStorage.getItem('items護石');
    if (stored武器装飾品) setItems武器装飾品(JSON.parse(stored武器装飾品));
    if (stored防具装飾品) setItems防具装飾品(JSON.parse(stored防具装飾品));
    if (stored護石) setItems護石(JSON.parse(stored護石));
  }, []);

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

  const filteredItems = currentItems.map((item, index) => ({
    ...item,
    originalIndex: index,
  })).filter((item) => item.name.includes(filterText));

  const handleExport = () => {
    const data = {
      items武器装飾品,
      items防具装飾品,
      items護石,
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'items_data.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImport = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const result = JSON.parse(e.target?.result as string);
        if (result.items武器装飾品 && result.items防具装飾品 && result.items護石) {
          setItems武器装飾品(result.items武器装飾品);
          setItems防具装飾品(result.items防具装飾品);
          setItems護石(result.items護石);
        } else {
          alert('JSONファイルの形式が正しくありません。');
        }
      } catch (error) {
        alert('JSONファイルの読み込みに失敗しました。');
      }
    };
    reader.readAsText(file);
  };

  return (
    <Container
      sx={{
        mt: 4,
        backgroundColor: '#f9f1e7',
        color: '#333',
        padding: 4,
        borderRadius: 4,
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
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
        モンハンアイテム管理
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
        label="アイテムを検索"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
        fullWidth
        sx={{
          mb: 3,
          backgroundColor: '#ffffff',
          borderRadius: 2,
        }}
      />

      <Box sx={{ mb: 3 }}>
        {filteredItems.map((item) => (
          <Grid
            key={item.originalIndex}
            container
            spacing={2}
            alignItems="center"
            sx={{
              py: 1.5,
              px: 2,
              borderRadius: 2,
              backgroundColor: '#fff7f0',
              mb: 1,
            }}
          >
            <Grid item xs={8}>
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
            <Grid item xs={4}>
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
          onClick={handleExport}
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
          <input type="file" accept=".json" hidden onChange={handleImport} />
        </Button>
      </Box>
    </Container>
  );
};

export default SimulatorPage;
