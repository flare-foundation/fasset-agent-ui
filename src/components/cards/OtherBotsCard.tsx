import { Badge, Loader, Paper, Table } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { truncateString } from "@/utils";
import CopyIcon from "@/components/icons/CopyIcon";
import { IOtherBot } from "@/types";

interface IOtherBotsCard {
    className?: string;
    otherBots: IOtherBot[];
}

export default function OtherBotsCard({ otherBots, className }: IOtherBotsCard) {
    const { t } = useTranslation();

    const tokenColumns: string[] = otherBots[0]
        ? otherBots[0].balances.map(balance => balance.symbol)
        : [];

    return (
        <Paper
            className={`${className}`}
            withBorder
        >
            <Table.ScrollContainer minWidth={470}>
                <Table
                    verticalSpacing="md"
                >
                    <Table.Thead>
                        <Table.Tr>
                            <Table.Th className="uppercase">#</Table.Th>
                            <Table.Th className="uppercase">{t('other_bots_card.table.type_label')}</Table.Th>
                            <Table.Th className="uppercase">{t('other_bots_card.table.status_label')}</Table.Th>
                            <Table.Th className="uppercase">{t('other_bots_card.table.working_address_label')}</Table.Th>
                            {tokenColumns.map(column => (
                                <Table.Th
                                    key={column}
                                    className="uppercase"
                                >
                                    {column}
                                </Table.Th>
                            ))}
                        </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>
                        {otherBots.map(((bot, index) => (
                            <Table.Tr key={index}>
                                <Table.Td>
                                    {index + 1}
                                </Table.Td>
                                <Table.Td>
                                    {bot.type}
                                </Table.Td>
                                <Table.Td>
                                    <div className="flex items-center mb-1">
                                        <Badge
                                            variant="outline"
                                            color={bot.status ? 'var(--green-default)' : 'var(--dark-red-default)'}
                                            radius="xs"
                                            className={`font-normal`}
                                        >
                                            <div className="flex items-center">
                                                <span
                                                    className="status-dot mr-2"
                                                    style={{
                                                        backgroundColor: bot.status ? 'var(--green-default)' : 'var(--dark-red-default)'
                                                    }}
                                                />
                                                <span style={{color: bot.status ? 'var(--green-default)' : 'var(--dark-red-default)'}}>
                                                    {t(`other_bots_card.table.agent_${bot.status ? 'live' : 'offline'}_label`)}
                                                </span>
                                            </div>
                                        </Badge>
                                    </div>
                                </Table.Td>
                                <Table.Td>
                                    <div className="flex items-center">
                                        {truncateString(bot.address ?? '', 5, 5)}
                                        <CopyIcon
                                            text={bot.address ?? ''}
                                        />
                                    </div>
                                </Table.Td>
                                {bot.balances.map(balance => (
                                    <Table.Td key={balance.symbol}>
                                        {balance.balance}
                                    </Table.Td>
                                ))}
                            </Table.Tr>
                        )))}
                    </Table.Tbody>
                </Table>
            </Table.ScrollContainer>
        </Paper>
    );
}