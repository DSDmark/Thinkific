"use client";

const ClientsSection = () => {
  const clients = [
    { name: "Google", logo: "https://logo.clearbit.com/google.com" },
    { name: "Amazon", logo: "https://logo.clearbit.com/amazon.com" },
    { name: "Microsoft", logo: "https://logo.clearbit.com/microsoft.com" },
    { name: "FedEx", logo: "https://logo.clearbit.com/fedex.com" },
    { name: "UN", logo: "https://logo.clearbit.com/un.org" },
    { name: "Shell", logo: "https://logo.clearbit.com/shell.com" },
    { name: "Qatar Airways", logo: "https://logo.clearbit.com/qatarairways.com" },
    { name: "Boeing", logo: "https://logo.clearbit.com/boeing.com" }
  ];

  return (
    <section className="clients-section">
      <div className="container">
        <h2 className="section-subtitle text-center">Clients Include</h2>
        <div className="clients-grid">
          {clients.map((client) => (
            <div key={client.name} className="client-logo-container">
              <img 
                src={client.logo} 
                alt={client.name} 
                className="client-logo"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://via.placeholder.com/100x40?text=${client.name}`;
                }}
              />
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .clients-section {
          padding: 4rem 0;
          background-color: #f9fbfd;
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
        }
        .section-subtitle {
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-lighter);
          text-transform: uppercase;
          letter-spacing: 0.15rem;
          margin-bottom: 3rem;
        }
        .clients-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 3rem;
          align-items: center;
          justify-items: center;
        }
        .client-logo-container {
          width: 100px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          filter: grayscale(100%) opacity(0.6);
          transition: filter 0.3s ease, opacity 0.3s ease;
        }
        .client-logo-container:hover {
          filter: grayscale(0%) opacity(1);
        }
        .client-logo {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }
        @media (max-width: 992px) {
          .clients-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        @media (max-width: 768px) {
          .clients-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default ClientsSection;
