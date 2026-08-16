import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiRefreshCw, FiZap } from 'react-icons/fi';

const routes = [
  { id: 'auth', label: 'Auth', hint: 'jwt + rbac', color: 'bg-accent' },
  { id: 'api', label: 'API', hint: 'rest + grpc', color: 'bg-sun' },
  { id: 'data', label: 'Data', hint: 'mongo + redis', color: 'bg-rust' },
];

const packets = [
  { id: 'token', target: 'auth', label: 'token refresh' },
  { id: 'order', target: 'api', label: 'order request' },
  { id: 'cache', target: 'data', label: 'cache sync' },
  { id: 'role', target: 'auth', label: 'role check' },
  { id: 'webhook', target: 'api', label: 'webhook' },
  { id: 'index', target: 'data', label: 'index write' },
];

const PacketGame = () => {
  const [packetIndex, setPacketIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [lastRoute, setLastRoute] = useState(null);

  const packet = packets[packetIndex % packets.length];
  const targetRoute = useMemo(() => routes.find((route) => route.id === packet.target), [packet.target]);

  const sendPacket = (routeId) => {
    const correct = routeId === packet.target;
    setLastRoute({ routeId, correct });
    setScore((value) => Math.max(0, value + (correct ? 10 : -3)));
    setStreak((value) => (correct ? value + 1 : 0));
    setPacketIndex((value) => value + 1);
  };

  const reset = () => {
    setPacketIndex(0);
    setScore(0);
    setStreak(0);
    setLastRoute(null);
  };

  return (
    <section className="play-lab mt-12">
      <div className="relative z-10 grid gap-6 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
        <div>
          <p className="micro-label">Tiny system game</p>
          <h2 className="mt-4 text-4xl font-black leading-tight text-ink md:text-6xl">
            Route the packet before production gets noisy.
          </h2>
          <p className="mt-5 max-w-xl text-base font-medium leading-8 text-muted">
            A small interactive nod to the kind of backend work I like: clear boundaries, fast decisions, and fewer surprises when traffic arrives.
          </p>
        </div>

        <div className="surface p-4 md:p-5">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-ink/10 pb-4">
            <div>
              <p className="font-mono text-[0.66rem] font-black uppercase tracking-[0.16em] text-muted">incoming packet</p>
              <h3 className="mt-2 text-2xl font-black text-ink">{packet.label}</h3>
            </div>
            <button type="button" onClick={reset} className="icon-action" aria-label="Reset packet game">
              <FiRefreshCw size={18} />
            </button>
          </div>

          <div className="packet-stage my-5">
            <motion.div
              key={packet.id}
              className={`packet-token ${targetRoute?.color || 'bg-accent'}`}
              initial={{ x: 0, opacity: 0, scale: 0.85 }}
              animate={{ x: ['0%', '55%', '92%'], opacity: [0, 1, 1], scale: [0.85, 1, 0.92] }}
              transition={{ duration: 1.7, ease: 'easeInOut', repeat: Infinity, repeatDelay: 0.5 }}
            >
              <FiZap size={16} />
            </motion.div>
            <span className="packet-line" />
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {routes.map((route) => (
              <button
                key={route.id}
                type="button"
                onClick={() => sendPacket(route.id)}
                className={`route-button ${lastRoute?.routeId === route.id ? (lastRoute.correct ? 'is-correct' : 'is-wrong') : ''}`}
              >
                <span className={`route-dot ${route.color}`} />
                <span className="block text-lg font-black">{route.label}</span>
                <span className="mt-1 block font-mono text-[0.64rem] uppercase tracking-[0.12em] text-muted">{route.hint}</span>
              </button>
            ))}
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            <div className="game-stat">
              <span>score</span>
              <strong>{score}</strong>
            </div>
            <div className="game-stat">
              <span>streak</span>
              <strong>{streak}</strong>
            </div>
            <div className="game-stat">
              <span>target</span>
              <strong className="inline-flex items-center gap-2"><FiCheckCircle size={16} /> {targetRoute?.label}</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PacketGame;
