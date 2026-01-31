import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="flex gap-6 p-6 backdrop-blur-xl bg-white/40 shadow-md">
            <Link to="/">Reflection</Link>
            <Link to="/insights">Emotion Insights</Link>
            <LInk to="/wardrobe">Wardrobe</LInk>
            <Link to="/controls">Mirror Controls</Link>
        </div>
    );
}