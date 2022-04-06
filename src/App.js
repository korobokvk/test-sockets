import React, {useState, useEffect} from 'react'
import logo from './logo.svg';
import './App.css';
import { io } from "socket.io-client";

const socket = io("http://localhost:3000", {
  reconnectionDelayMax: 10000,
  auth: {
      token: 'eyJ4NXQiOiJOR0l6WWpBMU4yTmlOalV3WkdJeE1tUXlPREppTTJRMFltRmhZakF6WkRsaE5XWTROV1pqTlEiLCJraWQiOiJOR0l6WWpBMU4yTmlOalV3WkdJeE1tUXlPREppTTJRMFltRmhZakF6WkRsaE5XWTROV1pqTlFfUlMyNTYiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJjcnlwdG91aUB5b3BtYWlsLmNvbSIsImF1ZCI6Ilg2MW51Wms3b2pOM3BBUEJqRVNTVFI0bGt6d2EiLCJuYmYiOjE2NDg2MzM1MDYsImF6cCI6Ilg2MW51Wms3b2pOM3BBUEJqRVNTVFI0bGt6d2EiLCJzY29wZSI6Im9wZW5pZCIsImlzcyI6Imh0dHBzOlwvXC9pZG0uZGV2LmJhbmtmb3JhbGwuaW86NDQzXC9vYXV0aDJcL3Rva2VuIiwiZXhwIjoxNjQ4NjM3MTA2LCJnaXZlbl9uYW1lIjoiQ3J5cHRvIiwiaWF0IjoxNjQ4NjMzNTA2LCJmYW1pbHlfbmFtZSI6IlVJIiwianRpIjoiN2VlYmZmODktMWVjZC00ZjU1LTk4M2EtYmE0M2NlYTU3ODQ5IiwiZW1haWwiOiJjcnlwdG91aUB5b3BtYWlsLmNvbSJ9.rGJc3STSFQUhOsyCniSZaQlfgsvWqoKlxWdkN44TNq4N708ZNp3h8qwI4OkVr57MGkpB9KpRak7G8M6WYBM6oUm2KbqgM_SjJgKVHs4n6TIcxqf0x1XPa9q18SD6DcczsBMOauzexm_UhxQUXaaUR9Pp3L7HGFjohDzzafX5bqC9Ge60GqUs362YU5LJkDPftyazT9VMzheIFio-GzRrpTLaxIugnvT3EIZZMLmAjc3ldL41jiTbCfrWAvi3NhW8bYTJsSTg25l-_xcjmRgq1XpU4nw3DgZGfcwW_vX8iCp9QPv1FdQ3DMJqGeglmgQFfBrKj1VAKTrrXtvEeNec2w',
  },
  query: {
      topic: "vast.crypto.orders.execution.report",
  },
})

const useSocket = () => {
  const [data, setData] = useState(0)

  socket.on('market-data', ({Data}) => {
    setData(Data.BestBidOffer.Ask.Amount.Amount)
  })

  return data

}

const SocketData = () => {
  const data = useSocket();
  return <>
      <p>{data}</p>
    </>
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <SocketData />
      </header>
    </div>
  );
}

export default App;
