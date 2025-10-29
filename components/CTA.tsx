import { Container, Typography, Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import { memo } from "react";
import Image from "next/image";

type Reason = {
  cardNo: string;
  image: string;
  description: string;
};

const WhoNeedsHeader = memo(() => (
  <Container
    maxWidth="sm"
    sx={{
      margin: { xs: "0rem" },
      padding: { xs: "0rem" },
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
    }}
  >
    <Typography
      variant="h2"
      color="white"
      sx={{
        fontSize: { xs: "1.75rem", sm: "2rem", md: "2.5rem" },
        lineHeight: 1.2,
      }}
    >
      Who Needs an FAA Registered U.S. Agent for Service?
    </Typography>

    <Typography
      variant="body1"
      color="white"
      sx={{
        fontSize: { xs: "1rem", sm: "1.1rem" },
      }}
    >
      FAA regulation (14 CFR) 3.301-3.303 requires all FAA-certified pilots to maintain a U.S. mailing address for
      communications. Get compliant by subscribing to USASFAA MailBox.
    </Typography>
  </Container>
));

WhoNeedsHeader.displayName = "WhoNeedsHeader";

const ReasonCard = memo(({ reason }: { reason: Reason }) => (
  <Grid
    size={6}
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "1rem",
    }}
  >
    <Box
      sx={{
        padding: "2rem 1.5rem",
        display: "grid",
        placeItems: "center",
        backgroundColor: "primary.dark",
        borderRadius: "3rem",
      }}
    >
      <Box
        sx={{
          position: "relative",
          height: "2rem",
          width: "2rem",
        }}
      >
        <Image
          src={reason.image}
          alt={reason.description}
          fill
          loading="lazy"
          style={{
            objectFit: "contain",
            objectPosition: "center",
          }}
        />
      </Box>
    </Box>
    <Typography
      variant="body1"
      color="white"
      sx={{
        textAlign: "center",
        fontSize: { xs: "0.9rem", sm: "1rem" },
      }}
    >
      {reason.description}
    </Typography>
  </Grid>
));

ReasonCard.displayName = "ReasonCard";

export const WhoNeeds = memo(() => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: { xs: "2rem", sm: "3rem" },
        marginTop: "-3rem",
        paddingY: { xs: "3rem", sm: "4rem", md: "6rem" },
        backgroundColor: "primary.light",
        borderRadius: "3rem 3rem 0rem 0rem",
      }}
    >
      <WhoNeedsHeader />

      <Grid container spacing="2rem" columns={{ xs: 6, sm: 12, md: 18, lg: 30 }}>
        {who.map((reason) => (
          <ReasonCard key={reason.image} reason={reason} />
        ))}
      </Grid>
    </Container>
  );
});

WhoNeeds.displayName = "WhoNeeds";

const who: Reason[] = [
  {
    cardNo: "1",
    image: "/images/icons/connecting_airports.svg",
    description: "International aviation businesses (e.g., charters, maintenance).",
  },
  {
    cardNo: "2",
    image: "/images/icons/airplanemode_active.svg",
    description: "FAA-certified pilots with a foreign/permanent overseas address.",
  },
  {
    cardNo: "3",
    image: "/images/icons/emoji_people.svg",
    description: "Anyone applying for FAA certifications etc...",
  },
  {
    cardNo: "4",
    image: "/images/icons/flight_takeoff.svg",
    description: "Aircraft owners and operators based outside of the United States.",
  },
  {
    cardNo: "5",
    image: "/images/icons/school.svg",
    description: "FAA-certified flight schools and training organizations.",
  },
];
