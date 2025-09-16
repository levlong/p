import type { Transaction } from "../model/Transaction";
import { formatDateToVietnam } from "../utils/DateTimeHelper";

interface Props {
  transaction: Transaction;
  onEdit: (id: number) => void;
}

const TransactionItem: React.FC<Props> = ({ transaction, onEdit }) => (
  <div className="flex items-center h-[60px] px-2 border-b border-gray-100 last:border-b-0">
    <span className="w-14 text-xs text-gray-400">
      {formatDateToVietnam(transaction.created_at)}
    </span>
    <span className="flex-1 ml-2 text-sm text-gray-800 truncate">
      {transaction.description}
    </span>
    <span className="w-20 text-right text-sm text-gray-700 font-bold ml-2 truncate">
      {Number(transaction.amount).toLocaleString()} ₫
    </span>
    <button
      className="ml-2 px-2 py-1 text-xs text-gray-500 rounded hover:bg-gray-100 transition"
      onClick={() => onEdit(transaction.user_id)}
    >
      Edit
    </button>
  </div>
);

export default TransactionItem;