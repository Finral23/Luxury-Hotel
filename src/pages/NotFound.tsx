import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="text-4xl font-bold">404 – Страница не найдена</h1>
      <Link to="/" className="mt-4 text-blue-500 underline">
        Вернуться на главную
      </Link>
    </div>
  );
};

export default NotFound;
