import React,{useState} from "react";
import {Button,Container,Row,Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { contract } from "./connector";

function Home() {
const [name, setName] = useState("");
const [courseName, setCourseName] = useState("");
const [date, setDate] = useState("");
const [issueDate, setIssueDate] = useState("");
const [CertificateId, setCertificateId] = useState("");
const [CertificateData, setCertificateData] = useState("");
  const [Wallet, setWallet] = useState("");



 const handleName = (e) => {
   setName(e.target.value)
 }

 const handleCourseName = (e) => {
   setCourseName(e.target.value)
 }

  const handleDate = (e) => {
    setDate(e.target.value)
  }

  const handleIssueDate = (e) => {
    setIssueDate(e.target.value)
  }

  const handleCertificateId = (e) => {
    setCertificateId(e.target.value)
  }

  const issueCertificate = async () => {
    try {
      let tx = await contract.issueCertificate(name, courseName, date, issueDate )
      let txWait = await tx.wait() 
      console.log(txWait);
      alert(txWait.transactionHash)   
    } catch (error) {
      alert(error)
    }
  }


  const getCertificate = async () => {
    try {
      let tx = await contract.getCertificate(CertificateId)
      let arr = []
      tx.map(e => {
        arr.push(e.toString())
        console.log(e);
      })
      setCertificateData(arr)
    } catch (error) {
      alert(error)
    }
  }


  const handleWallet = async () => {
    if (!window.ethereum) {
      return alert('please install metamask');
    }

    const addr = await window.ethereum.request({
      method: 'eth_requestAccounts',
    });

    setWallet(addr[0])

  }


  return (
  <div>
   <h1 style={{marginTop:"30px", marginBottom:"80px"}}>Issue Certificate On Blockchain</h1>
      {!Wallet ?

        <Button onClick={handleWallet} style={{ marginTop: "30px", marginBottom: "50px" }}>Connect Wallet </Button>
        :
        <p style={{ width: "250px", height: "50px", margin: "auto", marginBottom: "50px", border: '2px solid #2096f3' }}>{Wallet.slice(0, 6)}....{Wallet.slice(-6)}</p>
      }
    <Container style={{display:"flex"}}>
     <Row style={{marginRight:"50px"}}>
      <Col>
       <div>
       
          
              <input style={{ marginTop: "10px", borderRadius: "5px" }} onChange={handleName} type="string" placeholder="Enter name" value={name} /> <br />
             
              <input style={{ marginTop: "10px", borderRadius: "5px" }} onChange={handleCourseName} type="string" placeholder="Enter course Name" value={courseName} /> <br />  
              
              <input style={{ marginTop: "10px", borderRadius: "5px" }} onChange={handleDate} type="number" placeholder="Enter date of graduation" value={date} /><br />
             
              <input style={{ marginTop: "10px", borderRadius: "5px" }} onChange={handleIssueDate} type="number" placeholder="Enter issue date" value={issueDate} /> <br />
        <Button onClick={issueCertificate} style={{ marginTop: "10px" }} variant="primary">Issuance of Certificate on Blockchain</Button>
       </div>
      </Col>
      </Row>
      <Row>
      <Col>
       <div>
        {/* <label>Get Certificate</label><br /> */}
              <input style={{ marginTop: "10px", borderRadius: "5px" }} onChange={handleCertificateId} type="number" placeholder="Enter Certificate Id" value={CertificateId} /> <br />
        <Button onClick={getCertificate} style={{ marginTop: "10px" }} variant="primary">get Certificate</Button>
        

        {CertificateData ?
          CertificateData.map((e) => 
          <p>
          {e}
          </p>
          ) : <p></p>
        }
        
       </div>
      </Col>
     </Row>
    </Container>
    
  </div>
  )
}

export default Home;
