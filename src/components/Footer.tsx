import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <SocialLinks variant="footer" />
        <p className="mt-6 text-sm text-warm-gray">
          &copy; {new Date().getFullYear()} Delulu Ceramics. Wszelkie prawa zastrzeżone.
        </p>
      </div>
    </footer>
  );
}
