interface ButtonProps {
    name: string;
    onClick: () => void;
  }
  
  export default function Button({ name, onClick}: ButtonProps) {
    return (
      <div>
        <button
          className={`flex justify-center max-w-[450px] mt-2 min-w-[450px] items-center bg-blue-500 text-center text-white p-2 rounded-lg`}
          onClick={onClick} 
        >
          {name}
        </button>
      </div>
    );
  }
  