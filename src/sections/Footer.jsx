import React from 'react'
import { ReactComponent as Background } from '../assets/background-footer.svg'
export default function Footer() {
  return (
    <footer className="relative mt-12">
      <div className="absolute inset-x-0 bottom-0">
        <Background className="w-full h-auto" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-36 pt-40 pb-12">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Icon logo */}
            <div className="w-12 h-12 bg-gradient-to-br from-[#52B4DA] to-[#1E3E85] rounded-full flex items-center justify-center text-white font-bold">RR</div>

            {/* Full logo text */}
            <div>
              <div className="text-2xl font-semibold text-white">Remote</div>
              <div className="-mt-2 text-2xl font-semibold text-white">Recruit</div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* social placeholders (use real links or replace with <a href="https://...">) */}
            <button aria-label="Facebook" className="w-8 h-8 rounded-full bg-white bg-opacity-10 flex items-center justify-center text-white">f</button>
            <button aria-label="LinkedIn" className="w-8 h-8 rounded-full bg-white bg-opacity-10 flex items-center justify-center text-white">in</button>
            <button aria-label="Twitter" className="w-8 h-8 rounded-full bg-white bg-opacity-10 flex items-center justify-center text-white">t</button>
          </div>
        </div>

        <div className="mt-12 border-t border-white border-opacity-10 pt-8 text-sm text-white text-opacity-80">
          © {new Date().getFullYear()} RemoteRecruit. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
