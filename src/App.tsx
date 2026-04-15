/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import SnakeGame from './components/SnakeGame';
import MusicPlayer from './components/MusicPlayer';
import { motion } from 'motion/react';
import { Music, Gamepad2 } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-cyan-500/30 overflow-hidden relative">
      {/* Atmospheric Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-fuchsia-500/10 blur-[120px] rounded-full" />
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-blue-500/5 blur-[100px] rounded-full" />
      </div>

      {/* Header */}
      <header className="relative z-10 px-8 py-6 flex justify-between items-center border-bottom border-white/5 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-cyan-500 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.3)]">
            <Gamepad2 className="text-black" size={24} />
          </div>
          <div>
            <h1 className="text-xl font-black uppercase tracking-tighter leading-none">Neon Rhythm</h1>
            <p className="text-[10px] uppercase tracking-[0.3em] text-cyan-400 font-bold">Snake Edition</p>
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-6 text-[10px] uppercase tracking-[0.2em] font-bold text-white/40">
          <span className="hover:text-white cursor-pointer transition-colors">Arcade</span>
          <span className="hover:text-white cursor-pointer transition-colors">Playlist</span>
          <span className="hover:text-white cursor-pointer transition-colors">Settings</span>
        </div>
      </header>

      <main className="relative z-10 container mx-auto px-4 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Info/Stats (Desktop) */}
          <div className="hidden lg:flex lg:col-span-3 flex-col gap-8">
            <section className="space-y-4">
              <h3 className="text-xs uppercase tracking-[0.3em] text-white/20 font-bold">Current Session</h3>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4">
                <div className="flex justify-between items-end">
                  <span className="text-xs text-white/40 uppercase">Time Played</span>
                  <span className="text-lg font-mono">12:45</span>
                </div>
                <div className="flex justify-between items-end">
                  <span className="text-xs text-white/40 uppercase">Apples Eaten</span>
                  <span className="text-lg font-mono">42</span>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h3 className="text-xs uppercase tracking-[0.3em] text-white/20 font-bold">Global Ranking</h3>
              <div className="space-y-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-white/20">0{i}</span>
                      <span className="text-sm font-medium">Player_{Math.floor(Math.random() * 9999)}</span>
                    </div>
                    <span className="text-xs font-mono text-cyan-400">{(1000 - i * 100).toString()}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Center: Snake Game */}
          <div className="lg:col-span-6 flex flex-col items-center">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <SnakeGame />
            </motion.div>
          </div>

          {/* Right Side: Music Player */}
          <div className="lg:col-span-3 flex flex-col items-center lg:items-end">
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="w-full"
            >
              <div className="flex items-center gap-2 mb-4 lg:justify-end">
                <Music size={16} className="text-cyan-400" />
                <h3 className="text-xs uppercase tracking-[0.3em] text-white/20 font-bold">Now Playing</h3>
              </div>
              <MusicPlayer />
            </motion.div>
          </div>

        </div>
      </main>

      {/* Footer / Status Bar */}
      <footer className="fixed bottom-0 left-0 right-0 z-20 px-8 py-4 bg-black/40 backdrop-blur-md border-t border-white/5 flex justify-between items-center text-[10px] uppercase tracking-[0.2em] text-white/30 font-bold">
        <div className="flex gap-6">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            Server Online
          </span>
          <span>v1.0.4-beta</span>
        </div>
        <div className="hidden sm:block">
          © 2026 Neon Rhythm Labs • All Rights Reserved
        </div>
      </footer>
    </div>
  );
}

