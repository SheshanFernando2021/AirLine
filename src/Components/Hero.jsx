import React from 'react';
import './hero.css';



const Hero = () => {

    const handleSubmit = (e) => {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const destination = document.getElementById("destination").value;
        const date = document.getElementById("date").value;

        document.getElementById("ticketName").textContent = name;
        document.getElementById("ticketDestination").textContent = destination;
        document.getElementById("ticketDate").textContent = date;

        document.getElementById("ticket").style.display = "block";
        document.getElementById("ticket").classList.add("zoomIn");
    };

    const printTicket = () => {
        const ticket = document.getElementById('ticket');
        const printWindow = window.open('', '', 'width=600,height=600');
        printWindow.document.open();
        printWindow.document.write('<html><head><title>Ticket Details</title></head><body>');
        printWindow.document.write(ticket.innerHTML);
        printWindow.document.write('</body></html>');
        printWindow.document.close();
        printWindow.print();
        printWindow.close();
    };




  return (
    <div className="container">
        
      {/* cloud */}
      <div className="cloud"></div>
      <div className="cloud"></div>
      <div className="cloud"></div>
      <div className="cloud"></div>
      
      {/* airplane */}
      <div className="airplane">
        <div className="head"></div>
        <div className="body">
          <div className="window"></div>
          <div className="window"></div>
          <div className="window"></div>
        </div>
        <div className="lwing"></div>
        <div className="rwing"></div>
        <div className="tale"></div>
      </div>
      {/* ground */}
      <div className="ground">
        <div className="tree">
          <div className="leaves"></div>
        </div>
        <div className="tree">
          <div className="leaves"></div>
        </div>
        <div className="tree">
          <div className="leaves"></div>
        </div>
        <div className="tree">
          <div className="leaves"></div>
        </div>
        <div className="tree">
          <div className="leaves"></div>
        </div>
      </div>

      {/* Contents */}
      <div className='contents'>
        
        <h2 className='Upp'>Fly with JollyJet<br /> Secure Your Adventure with Ease!</h2>

        <div className="everything">
            <div className='Cover'>
                <h1><i className="fa fa-plane icon"></i>JollyJet Ticket Booking</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name:
                    <input type="text" id="name" required /></label>
    
                    <label htmlFor="destination">Destination:
                    <select id="destination" required>
                        <option value="Rome">Rome</option>
                        <option value="Venezia">Venezia</option>
                        <option value="Naples">Naples</option>
                        <option value="Genoa">Genoa</option>
                        <option value="Palermo">Naples</option>
                        <option value="Florence">Florence</option>
                        <option value="Naples">Naples</option>
                    </select></label>
    
                    <label htmlFor="date">When:
                    <input type="date" id="date" required /></label>
                    <br /><br />
                    <button type="submit" className="fa-fa-check-icon"><i ></i>Book Ticket</button>
                </form>
                </div>
    
                <div className="ticket" id="ticket" style={{ display: 'none' }}>
                    <h3 style={{fontSize:"1.5em"}}><i className="fa-fa-ticket-icon"></i>Booking Details</h3>
                    <p><i className="fa-fa-user-icon"></i><strong>Name:</strong> <span id="ticketName"></span></p>
                    <p><i className="fa-fa-globe-icon"></i><strong>Destination:</strong> <span id="ticketDestination"></span></p>
                    <p><i className="fa-fa-calendar-icon"></i><strong>Date Of Travel:</strong> <span id="ticketDate"></span></p>
                    <button onClick={printTicket}><i className="fa fa-print icon"></i>Print Ticket</button>
                </div>
                <div className='Contacts' style={{ width:"100%", textAlign:"Center", cursor:"pointer"}}>
                <h4>Address: Via Milano 23, Milano</h4>
            <h4>Call Us: +39 062323345</h4>
            </div>
            </div>

            
        
      </div>
    </div>
  );
};

export default Hero;
