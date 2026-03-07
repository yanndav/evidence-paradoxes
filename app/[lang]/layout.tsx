// import Navbar from "@/components/Navbar";

type Props = {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
};

export default async function LangLayout({ children, params }: Props) {
  //   const { lang } = await params;

  return <>{children}</>;
}
