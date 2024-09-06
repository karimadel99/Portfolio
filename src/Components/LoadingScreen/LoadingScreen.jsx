import React from 'react'
import { Triangle } from 'react-loader-spinner';

export default function LoadingScreen() {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 text-white z-50">
        <Triangle
          visible={true}
          height="80"
          width="80"
          color="#7A1CAC"
          ariaLabel="triangle-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
        <div className="text-3xl font-bold mt-5">Loading...</div>
      </div>
    );
  };

