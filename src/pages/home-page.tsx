export default function Home() {
  return (
    <div className="mx-auto lg:mx-0 lg:grid lg:max-w-none lg:gap-x-16 lg:gap-y-6 xl:gap-x-8">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
        This application is playground for React development with Tailwind CSS, Vite, and
        TypeScript.
      </h1>
      <div className="mt-6 lg:mt-0 ">
        <p className="text-lg leading-8 text-gray-600">
          Additional features include ESLint, Prettier, React Router, Redux Toolkit, and
          more.
        </p>
      </div>
    </div>
  );
}
