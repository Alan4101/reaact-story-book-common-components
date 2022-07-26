import { FC } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { useAccordionNumberedStyles } from "./AccordionNumbered.style";
import classes from "./AccordionNumbered.module.scss";

interface IAccordionNumberedProps {
  children?: JSX.Element;
  number: number | string | null;
  title: string;
  subtitle?: string;
  isExpanded?: boolean;
  toggleAccordion?: () => void;
  tooltip?: string;
  switchComponent?: JSX.Element;
  enabled?: boolean;
  setEnabled?: (value: boolean) => void;
  fullWidth?: boolean;
  showExpandIcon?: boolean;
  margin?: string;
  fullLabel?: boolean;
}

export const AccordionNumbered: FC<IAccordionNumberedProps> = ({
  number = 1,
  title = "My title",
  subtitle,
  children,
  isExpanded = false,
  toggleAccordion,
  tooltip,
  switchComponent,
  fullWidth,
  showExpandIcon = true,
  margin = "30px",
  fullLabel = false,
}) => {
  const styles = useAccordionNumberedStyles();
  return (
    <div>
      <Accordion
        expanded={isExpanded}
        onChange={toggleAccordion}
        classes={{ root: classes.accorfionNumbered }}
        style={{ marginBottom: margin, marginTop: margin, width: "400px" }}
      >
        <AccordionSummary
          expandIcon={showExpandIcon ? <ExpandMoreIcon /> : null}
          //  className={styles.SummaryWithTooltip}
          className={styles.SummaryWithTooltip}
          style={fullWidth ? { width: "90%" } : {}}
        >
          <Grid
            // className={styles.SummaryWithSwitch}
            container
            flexWrap="nowrap"
          >
            <Grid className={styles.SummaryWithTooltip} item xs={10}>
              <Grid container alignItems="center" wrap="nowrap">
                {/* <Grid className={styles.SummaryWithTooltip} item xs={6}> */}
                {number && (
                  <Typography classes={{ root: classes.number }}>
                    {number}
                  </Typography>
                )}
                <Typography classes={{ root: classes.title }}>
                  {title}
                </Typography>

                {/* </Grid> */}
                <Grid className={styles.SummaryWithTooltip} item xs={7}>
                  <Typography className={styles.Subtitle}>
                    {subtitle}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            {switchComponent ? (
              <>
                <Grid item xs={2}></Grid>
                <Grid item xs={2}>
                  {switchComponent}
                </Grid>
              </>
            ) : null}
          </Grid>
        </AccordionSummary>

        <AccordionDetails style={{ paddingBottom: "25px", paddingLeft: "0" }}>
          {children}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
