import React from "react";
import CflrIcon from "@/components/icons/CflrIcon";
import UsdtIcon from "@/components/icons/UsdtIcon";
import Usdt0Icon from "@/components/icons/Usdt0Icon";
import UsdcIcon from "@/components/icons/UsdcIcon";
import EthIcon from "@/components/icons/EthIcon";
import FTestDogeIcon from "@/components/icons/FTestDogeIcon";
import FTestXrpIcon from "@/components/icons/FTestXrpIcon";
import FTestBtcIcon from "@/components/icons/FTestBtcIcon";
import SgbIcon from "@/components/icons/SgbIcon";
import C2FlrIcon from "@/components/icons/C2FlrIcon";

export default function CurrencyIcon({ currency, width = '40', height = '40', className }: { currency: string, width?: string, height?: string, className?: string, style?: any }) {
    if (!currency) {
        return null;
    }

    switch (currency.toLowerCase()) {
        case 'testusdt':
            return process.env.NATIVE_TOKEN === 'CFLR'
                ? <UsdtIcon width={width} height={height} className={className} />
                : <Usdt0Icon width={width} height={height} className={className} />;
        case 'testusdc':
            return <UsdcIcon width={width} height={height} className={className} />;
        case 'testeth':
            return <EthIcon width={width} height={height} className={className} />;
        case 'cflr':
            return <CflrIcon width={width} height={height} className={className} />;
        case 'c2flr':
            return <C2FlrIcon width={width} height={height} className={className} />;
        case 'ftestxrp':
            return <FTestXrpIcon width={width} height={height} className={className} />;
        case 'ftestbtc':
            return <FTestBtcIcon width={width} height={height} className={className} />;
        case 'ftestdoge':
            return <FTestDogeIcon width={width} height={height} className={className} />;
        case 'sgb':
            return <SgbIcon width={width} height={height} className={className} />;
    }

    return null;
}
