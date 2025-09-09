import LoginForm from "@/components/Login/LoginForm";
import LoginHeader from "@/components/Login/LoginHeader";

function LoginPage() {
 return (
  <main className="relative z-[1] flex h-screen justify-between p-[22px]">
   <section className="mx-auto flex w-2/3 max-w-sm shrink-[1] grow flex-col py-[48px] md:mx-0 md:max-w-2xl md:px-[68px]">
    <LoginHeader />
    <LoginForm className="my-auto" />
   </section>
   <section className="hidden aspect-[711/980] h-full shrink-[2.5] overflow-hidden rounded-[10px] md:block">
    <img
     src="/login-cover.png"
     alt="A robot in a fictional bubble world"
     className="h-full w-full object-cover"
    />
   </section>
  </main>
 );
}

export default LoginPage;
