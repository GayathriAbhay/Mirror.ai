export default function GlassCard({ children }) {
    return (
        <div className="p-6 rounded-3xl bg-white/30 backdrop-blur-xl shadow-lg border border-white/20">
            {children}
        </div>
    );
}