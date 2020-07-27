import { graphql } from "gatsby"
import { string, oneOf } from "prop-types"

export const SocialType = {
  name: oneOf([
    "facebook",
    "github",
    "goodreads",
    "instagram",
    "linkedin",
    "medium",
    "twitter",
    "youtube",
    "strava",
  ]),
  url: string,
}

export const query = graphql`
  fragment SocialFragment on SocialYaml {
    name
    url
  }
`
