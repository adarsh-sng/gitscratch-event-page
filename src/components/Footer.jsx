export default function Footer() {
  return (
    <footer className="bg-black/40 border-t border-white/10 px-6 py-12 ">
      <div className="max-w-7xl mx-auto text-center text-sm text-gray-400">
        <p>Hosted by Notion Community × AI Club, VIT Bhopal</p>
        <p>Questions? Contact us at</p>
        <a href="mailto:notioncommunity@vitbhopal.ac.in" className="text-blue-400 hover:underline">
          notioncommunity@vitbhopal.ac.in
        </a>{" "}
        |{" "}
        <a href="mailto:aiclub@vitbhopal.ac.in" className="text-blue-400 hover:underline">
          aiclub@vitbhopal.ac.in
        </a>
        <p className="mt-4 text-gray-500">© 2025 All rights reserved.</p>
      </div>
    </footer>
  );
}
