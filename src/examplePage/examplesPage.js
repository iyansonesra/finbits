import React from "react";
import "./examplePage.css";
import { useEffect, useState } from "react";
import { usePlaidLink } from "react-plaid-link";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000/ExamplePage";

function PlaidAuth({ publicToken }) {
  const [account, setAccount, holdings] = useState();

  useEffect(() => {
    async function fetchData() {
      let accessToken = await axios.post("/exchange_public_token", {
        public_token: publicToken,
      });
      console.log("accessToken", accessToken.data);
      const auth = await axios.post("/auth", {
        access_token: accessToken.data.accessToken,
      });
      console.log("auth data", auth.data);
      setAccount(auth.data.accounts[0].balances);
      const holdings = await axios.post("/holdings", {
        access_token: accessToken.data.accessToken,
      });
      console.log("holding data", holdings.data);
    }
    fetchData();
  }, []);

  return holdings && <p>account investment balance: {holdings.current}</p>;
}

function ExamplesPage() {
  const [linkToken, setLinkToken] = useState();
  const [publicToken, setPublicToken] = useState();

  useEffect(() => {
    async function fetch() {
      const response = await axios.post("/create_link_token");
      setLinkToken(response.data.link_token);
    }
    fetch();
  }, []);

  const { open, ready } = usePlaidLink({
    token: linkToken,
    onSuccess: (public_token, metadata) => {
      setPublicToken(public_token);
      console.log("success", public_token, metadata);
      // send public_token to server
    },
  });

  return publicToken ? (
    <PlaidAuth publicToken={publicToken} />
  ) : (
    <div>
      <div className="MainText">
        <h2>
          NEWSLETTERS<br></br>REIMAGINED
        </h2>
      </div>
      <div class="buttonHolder">
        <button
          class="rounded-square-button"
          onClick={() => open()}
          disabled={!ready}
        >
          Connect a bank account
        </button>
      </div>
    </div>
  );
}

export default ExamplesPage;
