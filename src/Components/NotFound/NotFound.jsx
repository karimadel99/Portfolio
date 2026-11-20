import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import Seo from '../Seo/Seo';

export function Component() {
  return (
    <>
      <Seo path="/404" noindex />
      <section className="max-w-screen-xl mx-auto px-6 lg:px-10 pt-10 md:pt-20 pb-24">
        <p className="mono text-[0.7rem] tracking-[0.22em] uppercase text-ink-3">Error 404</p>
        <h1 className="serif-display text-[3rem] sm:text-[4.5rem] md:text-[6rem] leading-[0.92] text-ink mt-6">
          Page not <span className="italic text-orange">found.</span>
        </h1>
        <p className="text-ink-2 text-base md:text-lg leading-relaxed mt-6 max-w-[50ch]">
          This page doesn't exist or has moved.
        </p>
        <Link to="/" className="btn btn-accent mt-8 inline-flex">
          Back to the home page <FaArrowRight size={11} />
        </Link>
      </section>
    </>
  );
}

export default Component;
