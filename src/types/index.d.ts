type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};

interface ImageComponentProps {
  src: string;
  alt: string;
  className?: string;
  width: number;
  height: number;
}

interface SlideProps {
  image: string;
  title: string;
  description: string;
}
