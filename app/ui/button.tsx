interface ButtonProps {
    name: string;
    onClick: () => void;
  }
  
  export default function Button({ name, onClick}: ButtonProps) {
    return (
      <>
        <button
          className={`w-full max-w-[350px] bg-blue-500 text-center text-white p-2 rounded-lg`}
          onClick={onClick} 
        >
          {name}
        </button>
      </>
    );
  }
  