import {
    Title,
    Paper,
    Button,
    LoadingOverlay
} from "@mantine/core";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import { UseQueryResult } from "@tanstack/react-query";
import DepositVaultCollateralModal from "@/components/modals/DepositVaultCollateralModal";
import DepositPoolCollateralModal from "@/components/modals/DepositPoolCollateralModal";
import ActivateVaultModal from "@/components/modals/ActivateVaultModal";
import DeactivateVaultModal from "@/components/modals/DeactivateVaultModal";
import ClaimRewardsModal from "@/components/modals/ClaimRewardsModal";
import DelegatePoolCollateralModal from "@/components/modals/DelegatePoolCollateralModal";
import SelfMintModal from "@/components/modals/SelfMintModal";
import SelfMintUnderlyingModal from "@/components/modals/SelfMintUnderylingModal";
import UnderlyingTopUpModal from "@/components/modals/UnderlyingTopUpModal";
import UnderlyingWithdrawalModal from "@/components/modals/UnderlyingWithdrawalModal";
import DepositCollateralLotsModal from "@/components/modals/DepositCollateralLotsModal";
import TransferToCoreVaultModal from "@/components/modals/TransferToCoreVaultModal";
import { IAgentVault, ICollateralItem } from "@/types";
import { useAgentVaultsInformation, useBalances, useCollaterals } from "@/api/agent";
import WithdrawFromCoreVaultModal from "@/components/modals/WithdrawFromCoreVaultModal";
import CancelUnderlyingWithdrawalModal from "@/components/modals/CancelUnderlyingWithdrawalModal";
import CancelTransferToCoreVaultModal from "@/components/modals/CancelTransferToCoreVaultModal";
import CancelWithdrawFromCoreVaultModal from "@/components/modals/CancelWithdrawFromCoreVaultModal";

interface IAgentVaultOperationsCard {
    className?: string;
    agentVault: IAgentVault | undefined;
    collateral: UseQueryResult<ICollateralItem[], Error>;
}

export default function AgentVaultOperationsCard({ className, agentVault, collateral}: IAgentVaultOperationsCard) {
    const { t } = useTranslation();
    const [isDepositVaultCollateralModalActive, setIsDepositVaultCollateralModalActive] = useState<boolean>(false);
    const [isDepositPoolCollateralModalActive, setIsDepositPoolCollateralModalActive] = useState<boolean>(false);
    const [isActivateVaultModalActive, setIsActivateVaultModalActive] = useState<boolean>(false);
    const [isDeactivateVaultModalActive, setIsDeactivateVaultModalActive] = useState<boolean>(false);
    const [isDepositCollateralLotsModalActive, setIsDepositCollateralLotsModalActive] = useState<boolean>(false);
    const [isClaimRewardsModalActive, setIsClaimRewardsModalActive] = useState<boolean>(false);
    const [isDelegatePoolCollateralModalActive, setIsDelegatePoolCollateralModalActive] = useState<boolean>(false);
    const [isSelfMintModalActive, setIsSelfMintModalActive] = useState<boolean>(false);
    const [isSelfMintUnderlyingModalActive, setIsSelfMintUnderlyingModalActive] = useState<boolean>(false);
    const [isUnderlyingTopUpModalActive, setIsUnderlyingTopUpModalActive] = useState<boolean>(false);
    const [isUnderlyingWithdrawalModalActive, setIsUnderlyingWithdrawalModalActive] = useState<boolean>(false);
    const [isTransferToCoreVaultModalActive, setIsTransferToCoreVaultModalActive] = useState<boolean>(false);
    const [isWithdrawFromCoreVaultModalActive, setIsWithdrawFromCoreVaultModalActive] = useState<boolean>(false);
    const [isCancelUnderlyingWithdrawalModalActive, setIsCancelUnderlyingWithdrawalModalActive] = useState<boolean>(false);
    const [isCancelTransferToCoreVaultModalActive, setIsCancelTransferToCoreVaultModalActive] = useState<boolean>(false);
    const [isCancelWithdrawFromCoreVaultModalActive, setIsCancelWithdrawFromCoreVaultModalActive] = useState<boolean>(false);

    const router = useRouter();
    const { fAssetSymbol, agentVaultAddress } = router.query;

    const agentVaultsInformation = useAgentVaultsInformation();
    const balances = useBalances(false);
    const collaterals = useCollaterals(false);

    const refetchData = () => {
        agentVaultsInformation.refetch();
        balances.refetch();
        collaterals.refetch();
    }

    const onCloseDepositCollateralLotsModal = (refetch: boolean) => {
        if (refetch) {
            refetchData();
        }
        setIsDepositCollateralLotsModalActive(false);
    }

    const onCloseDepositPoolCollateralModal = (refetch: boolean) => {
        if (refetch) {
            refetchData();
        }
        setIsDepositPoolCollateralModalActive(false);
    }

    const onCloseDepositVaultCollateralModal = (refetch: boolean) => {
        if (refetch) {
            refetchData();
        }
        setIsDepositVaultCollateralModalActive(false);
    }

    const onCloseDelegatePoolCollateralModal = async (refetch: boolean = false) => {
        if (refetch) {
            refetchData();
        }
        setIsDelegatePoolCollateralModalActive(false);
    }

    const onCloseSelfMintModal = () => {
        setIsSelfMintModalActive(false);
    }

    const onCloseSelfMintUnderlyingModal = async () => {
        setIsSelfMintUnderlyingModalActive(false);
    }

    const onCloseTransferToCoreVaultModal = () => {
        setIsTransferToCoreVaultModalActive(false);
    }

    const onCloseWithdrawFromCoreVaultModal = () => {
        setIsWithdrawFromCoreVaultModalActive(false);
    }

    const onCloseClaimRewardsModal = () => {
        setIsClaimRewardsModalActive(false);
    }

    const onCloseCancelUnderlyingWithdrawalModal = () => {
        setIsCancelUnderlyingWithdrawalModalActive(false);
    }

    const onCloseCancelTransferToCoreVaultModal = () => {
        setIsCancelTransferToCoreVaultModalActive(false);
    }

    const onCloseCancelWithdrawFromCoreVaultModal = () => {
        setIsCancelWithdrawFromCoreVaultModalActive(false);
    }

    return (
        <Paper
            className={`relative p-4 ${className}`}
            withBorder
        >
            <LoadingOverlay visible={agentVault == null} />
            <Title order={5} className="mb-8">{t('agent_vault_operations_card.title')}</Title>
            <Button
                variant="gradient"
                onClick={() => setIsDepositCollateralLotsModalActive(true)}
                className="block mb-3"
                fw={400}
            >
                {t('agent_vault_operations_card.deposit_collateral_lots_button')}
            </Button>
            <Button
                variant="gradient"
                onClick={() => setIsDepositVaultCollateralModalActive(true)}
                className="block mb-3"
                fw={400}
            >
                {t('agent_vault_operations_card.deposit_vault_collateral_button')}
            </Button>
            <Button
                variant="gradient"
                onClick={() => setIsDepositPoolCollateralModalActive(true)}
                className="block mb-3"
                fw={400}
            >
                {t('agent_vault_operations_card.deposit_pool_collateral_button')}
            </Button>
            <Button
                variant="gradient"
                onClick={() => setIsSelfMintModalActive(true)}
                className="block mb-3"
                fw={400}
            >
                {t('agent_vault_operations_card.self_mint_button')}
            </Button>
            {(fAssetSymbol as string)?.toLowerCase()?.includes('xrp') &&
                <>
                    <Button
                        variant="gradient"
                        onClick={() => setIsTransferToCoreVaultModalActive(true)}
                        className="block mb-3"
                        fw={400}
                    >
                        {t('agent_vault_operations_card.transfer_to_core_vault_button')}
                    </Button>
                    <Button
                        variant="gradient"
                        onClick={() => setIsWithdrawFromCoreVaultModalActive(true)}
                        className="block mb-3"
                        fw={400}
                    >
                        {t('agent_vault_operations_card.return_from_core_vault_button')}
                    </Button>
                    <Button
                        variant="gradient"
                        onClick={() => setIsCancelWithdrawFromCoreVaultModalActive(true)}
                        className="block mb-3"
                        fw={400}
                    >
                        {t('agent_vault_operations_card.cancel_withdraw_from_core_vault_button')}
                    </Button>
                </>
            }
            <Button
                variant="gradient"
                onClick={() => setIsSelfMintUnderlyingModalActive(true)}
                className="block mb-3"
                fw={400}
            >
                {t('agent_vault_operations_card.self_mint_underlying_button')}
            </Button>
            <Button
                variant="gradient"
                onClick={() => setIsUnderlyingTopUpModalActive(true)}
                className="block mb-3"
                fw={400}
            >
                {t('agent_vault_operations_card.underlying_top_up_button')}
            </Button>
            <Button
                variant="gradient"
                onClick={() => setIsUnderlyingWithdrawalModalActive(true)}
                className="block mb-3"
                fw={400}
            >
                {t('agent_vault_operations_card.underlying_withdrawal_button')}
            </Button>
            <Button
                variant="gradient"
                onClick={() => setIsCancelUnderlyingWithdrawalModalActive(true)}
                className="block mb-3"
                fw={400}
            >
                {t('agent_vault_operations_card.cancel_underlying_withdrawal_button')}
            </Button>
            <Button
                variant="gradient"
                onClick={() => setIsDelegatePoolCollateralModalActive(true)}
                className="block mb-3"
                fw={400}
            >
                {t('agent_vault_operations_card.delegate_button')}
            </Button>
            <Button
                variant="gradient"
                onClick={() => setIsClaimRewardsModalActive(true)}
                className="block mb-3"
                fw={400}
            >
                {t('agent_vault_operations_card.claim_rewards_button')}
            </Button>
            {!agentVault?.publiclyAvailable &&
                <Button
                    variant="gradient"
                    onClick={() => setIsActivateVaultModalActive(true)}
                    className="block mb-3"
                    fw={400}
                >
                    {t('agent_vault_operations_card.activate_vault_button')}
                </Button>
            }
            <Button
                variant="gradient"
                onClick={() => setIsDeactivateVaultModalActive(true)}
                fw={400}
            >
                {t('agent_vault_operations_card.close_vault_button')}
            </Button>
            {agentVault &&
                <>
                    <DepositCollateralLotsModal
                        fAssetSymbol={fAssetSymbol as string}
                        agentVaultAddress={agentVaultAddress as string}
                        opened={isDepositCollateralLotsModalActive}
                        onClose={onCloseDepositCollateralLotsModal}
                    />
                    <DepositVaultCollateralModal
                        collateral={collateral}
                        vaultCollateralToken={agentVault.vaultCollateralToken}
                        fAssetSymbol={fAssetSymbol as string}
                        agentVaultAddress={agentVaultAddress as string}
                        opened={isDepositVaultCollateralModalActive}
                        onClose={onCloseDepositVaultCollateralModal}
                    />
                    <DepositPoolCollateralModal
                        collateral={collateral}
                        opened={isDepositPoolCollateralModalActive}
                        fAssetSymbol={fAssetSymbol as string}
                        agentVaultAddress={agentVaultAddress as string}
                        onClose={onCloseDepositPoolCollateralModal}
                    />
                    <ActivateVaultModal
                        opened={isActivateVaultModalActive}
                        fAssetSymbol={fAssetSymbol as string}
                        agentVaultAddress={agentVaultAddress as string}
                        onClose={() => setIsActivateVaultModalActive(false)}
                    />
                    <DeactivateVaultModal
                        opened={isDeactivateVaultModalActive}
                        fAssetSymbol={fAssetSymbol as string}
                        agentVaultAddress={agentVaultAddress as string}
                        onClose={() => setIsDeactivateVaultModalActive(false)}
                    />
                    <ClaimRewardsModal
                        opened={isClaimRewardsModalActive}
                        fAssetSymbol={fAssetSymbol as string}
                        agentVaultAddress={agentVaultAddress as string}
                        onClose={onCloseClaimRewardsModal}
                    />
                    <DelegatePoolCollateralModal
                        opened={isDelegatePoolCollateralModalActive}
                        fAssetSymbol={fAssetSymbol as string}
                        agentVaultAddress={agentVaultAddress as string}
                        delegates={agentVault?.delegates ?? []}
                        onClose={onCloseDelegatePoolCollateralModal}
                    />
                    <SelfMintModal
                        opened={isSelfMintModalActive}
                        fAssetSymbol={fAssetSymbol as string}
                        agentVaultAddress={agentVaultAddress as string}
                        redirect
                        onClose={onCloseSelfMintModal}
                    />
                    <SelfMintUnderlyingModal
                        opened={isSelfMintUnderlyingModalActive}
                        fAssetSymbol={fAssetSymbol as string}
                        agentVaultAddress={agentVaultAddress as string}
                        redirect
                        onClose={onCloseSelfMintUnderlyingModal}
                    />
                    <UnderlyingTopUpModal
                        opened={isUnderlyingTopUpModalActive}
                        fAssetSymbol={fAssetSymbol as string}
                        agentVaultAddress={agentVaultAddress as string}
                        onClose={() => setIsUnderlyingTopUpModalActive(false)}
                    />
                    <UnderlyingWithdrawalModal
                        opened={isUnderlyingWithdrawalModalActive}
                        fAssetSymbol={fAssetSymbol as string}
                        agentVaultAddress={agentVaultAddress as string}
                        onClose={() => setIsUnderlyingWithdrawalModalActive(false)}
                    />
                    <TransferToCoreVaultModal
                        opened={isTransferToCoreVaultModalActive}
                        fAssetSymbol={fAssetSymbol as string}
                        agentVaultAddress={agentVaultAddress as string}
                        onClose={onCloseTransferToCoreVaultModal}
                        redirect
                    />
                    <WithdrawFromCoreVaultModal
                        opened={isWithdrawFromCoreVaultModalActive}
                        fAssetSymbol={fAssetSymbol as string}
                        agentVaultAddress={agentVaultAddress as string}
                        onClose={onCloseWithdrawFromCoreVaultModal}
                        redirect
                    />
                    <CancelUnderlyingWithdrawalModal
                        opened={isCancelUnderlyingWithdrawalModalActive}
                        fAssetSymbol={fAssetSymbol as string}
                        agentVaultAddress={agentVaultAddress as string}
                        onClose={onCloseCancelUnderlyingWithdrawalModal}
                    />
                    <CancelTransferToCoreVaultModal
                        opened={isCancelTransferToCoreVaultModalActive}
                        fAssetSymbol={fAssetSymbol as string}
                        agentVaultAddress={agentVaultAddress as string}
                        onClose={onCloseCancelTransferToCoreVaultModal}
                    />
                    <CancelWithdrawFromCoreVaultModal
                        opened={isCancelWithdrawFromCoreVaultModalActive}
                        fAssetSymbol={fAssetSymbol as string}
                        agentVaultAddress={agentVaultAddress as string}
                        onClose={onCloseCancelWithdrawFromCoreVaultModal}
                    />
                </>
            }
        </Paper>
    );
}
