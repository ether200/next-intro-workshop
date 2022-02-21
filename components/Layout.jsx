import React from 'react';
import Image from 'next/image';

const Layout = ({ children }) => {
    return (
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "white",
          }}
        >
          <main
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                textAlign: "left",
                padding: 24,
                borderBottom: "1px solid #eaeaea",
                boxShadow: "0 0 15px 0 rgb(0 0 0 / 10%)",
              }}
            >
                <Image alt="Vercel Logo" height={16} src="/vercel.svg" width={72} />
            </div>
            <div
              style={{
                padding: 24,
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                maxWidth: 1024,
                margin: "auto",
                width: "100%",
              }}
            >
              {children}
            </div>
          </main>
    
          <footer
            style={{
              padding: 48,
              borderTop: "1px solid #eaeaea",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#fafafa",
            }}
          >
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              rel="noopener noreferrer"
              style={{display: "flex", alignItems: "center", justifyContent: "center"}}
              target="_blank"
            >
              Powered by{" "}
              <span style={{height: 16, marginLeft: 12}}>
                <Image alt="Vercel Logo" height={16} src="/vercel.svg" width={72} />
              </span>
            </a>
          </footer>
        </div>
      );
}

export default Layout;