// src/components/Button.tsx

type ButtonProps = {
  text: string;
  type?: "primary" | "secondary";
};

const Button = ({ text, type = "primary" }: ButtonProps) => {
  const styles =
    type === "primary"
      ? "bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 transition px-6 py-2 rounded-lg"
      : "bg-pink-500 hover:bg-purple-500 text-white transition px-6 py-2 rounded-lg";

  return <button className={styles}>{text}</button>;
};

export default Button;
