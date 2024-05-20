export const metadata = {
  title: "About Us",
};

export default function AboutUsLayout({ children }) {
  return (
    <body>
      {children}
      &copy; NextJs is great!
    </body>
  );
}
