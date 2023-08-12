import React from 'react';
import AsideComponent from "@/components/aside/aside";
import NavbarComponent from "@/components/navbar/navbar";

const DbLayout = ({ children }) => {
    return (
      <div className="lg:grid grid-cols-12">
        <div
          className="lg:col-span-3 2xl:col-span-2 xl:col-span-3 min-h-screen relative hidden lg:block transition-width duration-300 ease-in-out"
          style={{
            boxShadow:
              "0px 8.88888931274414px 53.33333206176758px 0px rgba(226, 236, 249, 0.50)",
          }}
        >
          <AsideComponent />
        </div>
        <div className="lg:col-span-9 xl:col-span-9">
          <NavbarComponent />
          {children}
        </div>
      </div>
    );
};

export default DbLayout;