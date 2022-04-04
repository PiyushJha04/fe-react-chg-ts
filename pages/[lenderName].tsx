import { useRouter } from 'next/router';
import { Grid } from '@mui/material';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';

// @components
import Loader from 'src/components/loader/loader';
import LenderForm from 'src/components/lenderForm/lenderForm';

const LenderNamePage: NextPage = () => {
  const router = useRouter();
  const lenderSlug = router.query.lenderName?.toString();
  const [lenderData, setLenderData] = useState({fields: [], name: ""});
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (!!lenderSlug) {
      setLoading(true)
      fetch(`api/lenders/${lenderSlug}`)
        .then((res) => res.json())
        .then((data) => {
          setLenderData(data);
          setLoading(false);
        })
    }
  }, [lenderSlug]);

  if (isLoading) return <Loader />

  return (
    <Grid container>
      <LenderForm {...lenderData} />
    </Grid>
  )
};

export default LenderNamePage;
