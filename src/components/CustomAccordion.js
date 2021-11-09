import { AttachMoney } from '@mui/icons-material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import * as React from 'react';

export default function CustomAccordion ({ children = <></>, levelList = [] }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <h1 className="text-main font-bold"><AttachMoney /> Upgrade amount setting</h1>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            { children }
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
