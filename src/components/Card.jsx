import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import { getEquivalentBzzTokens } from "../helpers/bzzToken";

const InfoCard = () => {
  const [bzzSupply, setBzzSupply] = useState("");
  const [daiAmount, setDaiAmount] = useState("");
  const [bzzToken, setBzzToken] = useState("");

  // hnadle onchange for dai amount
  const onChangeDaiAmount = (e) => {
    e.preventDefault();
    setDaiAmount(e.target.value);
  };

  // handle onchange for total supply

  const onChangeBzzSupply = (e) => {
    e.preventDefault();
    setBzzSupply(e.target.value);
  };

  // calculate bzz token for given supply and dai amount

  const getEquivalentBZZ = async (bzzSupply, daiAmount) => {
    let bzzAmount = await getEquivalentBzzTokens(bzzSupply, daiAmount);
    setBzzToken(bzzAmount);
  };

  // handle oncklick calculate button

  const onCalculate = (e) => {
    e.preventDefault();
    getEquivalentBZZ(bzzSupply, daiAmount);
  };

  return (
    <Card sx={{ width: 500 }}>
      <CardContent>
        <div className="heading-container">
          <Typography variant="h6" component="div">
            BZZ Token
          </Typography>
        </div>
        <Divider />
        <div className="textbox-container">
          <TextField
            id="outlined-basic"
            label="BZZ Supply"
            variant="outlined"
            type="number"
            name="bzzSupply"
            inputProps={{ "data-testid": "bzz-input" }}
            value={bzzSupply}
            onChange={(e) => onChangeBzzSupply(e)}
          />
          <TextField
            id="outlined-basic"
            label="DAI Amount"
            variant="outlined"
            type="number"
            name="daiAmount"
            inputProps={{ "data-testid": "dai-input" }}
            value={daiAmount}
            onChange={(e) => onChangeDaiAmount(e)}
          />
          <Button
            size="small"
            data-testid="calculate-dai-submit"
            disabled={!bzzSupply || !daiAmount}
            onClick={(e) => onCalculate(e)}
          >
            Calculate
          </Button>
          <Divider />
          {bzzToken ? (
            <div className="heading-container">
              <Typography variant="h7" component="div">
                Total BZZ Token : {bzzToken}
              </Typography>
            </div>
          ) : (
            ""
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default InfoCard;
