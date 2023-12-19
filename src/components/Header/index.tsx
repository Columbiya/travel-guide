import Link from "next/link";
import { ChangeEvent, FC, useState } from "react";
import { Container, Input } from "..";

export const Header: FC = () => {
  const [search, setSearch] = useState("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className="py-10 bg-white">
      <Container>
        <header className="flex justify-between">
          <Link href="/" className="text-orangePrimary">
            logo
          </Link>

          <nav className="flex justify-between" style={{ width: "80%" }}>
            <Link
              href="/"
              className="text-lg text-gray-80 hover:text-orangePrimary transition-colors"
            >
              Что посмотреть
            </Link>
            <Link
              href="/"
              className="text-lg text-gray-80 hover:text-orangePrimary transition-colors"
            >
              Куда пойти
            </Link>
            <Link
              href="/"
              className="text-lg text-gray-80 hover:text-orangePrimary transition-colors"
            >
              Чем заняться
            </Link>
            <Link
              href="/"
              className="text-lg text-gray-80 hover:text-orangePrimary transition-colors"
            >
              Где поесть
            </Link>
            <Link
              href="/"
              className="text-lg text-gray-80 hover:text-orangePrimary transition-colors"
            >
              Что купить
            </Link>
            <Link
              href="/"
              className="text-lg text-gray-80 hover:text-orangePrimary transition-colors"
            >
              Где остановиться
            </Link>
          </nav>

          <div></div>
        </header>
      </Container>
    </div>
  );
};
