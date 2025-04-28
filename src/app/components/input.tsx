interface FieldProps {
    label: string;
    type: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Field = ({ label, type, value, onChange }: FieldProps) => {
    return (
        <div className="flex flex-col">
            <div>
                {label}
            </div>
            <input
                type={type}
                value={value}
                onChange={onChange}
                className="border border-gray-300 rounded-md p-1 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
    )
}

export default Field;