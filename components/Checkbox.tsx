
interface Props {
    label: string;
    checked: boolean; 
    onChange: (e:any) => void
    name: string
}
export default function Checkbox({ label, checked, onChange, name }:Props){
    return (
        <div className="checkbox-container">
            <input
                
                type="checkbox"
                checked={checked}
                onChange={onChange}
                name={name}
                id="custom-checkbox"
                className="w-8 h-8 border-2 border-gray-400 rounded-full checked:bg-green-500 checked:border-green-500 focus:ring-0 transition-all"

            />
            <label htmlFor="custom-checkbox" className="bg-green-100">
                {label}
            </label>
        </div>
    );
  };