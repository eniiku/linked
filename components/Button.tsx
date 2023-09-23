import Link from 'next/link';

const Button = ({
  children,
  url,
  active,
}: {
  children: React.ReactNode;
  url: string;
  active?: boolean;
}) => {
  return (
    <Link href={url}>
      <button
        aria-label='Click to move to contact page'
        className={`w-[172px] font-montserrat text-white bg-gradient-to-r from-primary-alt to-primary py-4 rounded-[4px] transition-colors duration-150 ease-in hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-600 nav-btn ${
          active ? 'active-btn' : ''
        }`}
      >
        {children}
      </button>
    </Link>
  );
};

export default Button;
