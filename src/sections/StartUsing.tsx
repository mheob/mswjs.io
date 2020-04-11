import React from 'react'
import { TextLead } from '../components/TextLead'
import { Grid } from '../components/Grid'
import { Box } from 'atomic-layout'
import { Button } from '../components/Button'
import { Link } from 'gatsby'

export const StartUsing = () => {
  return (
    <Grid paddingVertical={100}>
      <Box
        flex
        flexDirection="column"
        alignItems="center"
        maxWidth="100%"
        width={600}
        marginHorizontal="auto"
      >
        <h2>Begin your journey</h2>
        <TextLead align="center">
          Mock Service Worker works in any browser environment, be it your
          application, a unit test, or an end-to-end scenario. Start with the
          next level of API mocking today.
        </TextLead>
        <Box marginTop={32}>
          <Button variant="primary" as={Link} to="/docs/getting-started">
            Get started
          </Button>
        </Box>
      </Box>
    </Grid>
  )
}
