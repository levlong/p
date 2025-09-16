import { allTransactions } from "../services/transactionApi";
import MonthSelector from "../components/MonthSelector";
import TotalBalance from "../components/TotalBalance";
import AddTransactionButton from "../components/AddTransactionButton";
import TransactionsList from "../components/TransactionsList";
import { useOutletContext } from "react-router-dom";
import type { Transaction } from "../model/Transaction";

type ContextType = {
    transactions: Transaction[];
    setTransactions: React.Dispatch<React.SetStateAction<Transaction[]>>;
    selectedMonth: string;
    setSelectedMonth: React.Dispatch<React.SetStateAction<string>>
}

const Home: React.FC = () => {
    const {
        transactions,
        setTransactions,
        selectedMonth,
        setSelectedMonth
    } = useOutletContext<ContextType>();
    
    const handleAddTransaction = async () => {
        await allTransactions(1).then(data => {
            setTransactions(data);
        });
    };

    const handleEditTransaction = (id: number) => {
        alert("Edit transaction " + id);
    };

    return (
        <>
            <MonthSelector selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth} />
            <TotalBalance transactions={transactions} />
            <AddTransactionButton onAdd={handleAddTransaction} />
            <TransactionsList transactions={transactions} onEdit={handleEditTransaction} />
        </>
    );
}

export default Home;