import React from "react"
import {
  FaFacebook,
  FaGithub,
  FaGoodreadsG,
  FaMediumM,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaStrava,
} from "react-icons/fa"
import { SocialType } from "../../types"

const SocialIcon = ({ name, ...params }) => {
  const icons = {
    facebook: FaFacebook,
    github: FaGithub,
    goodreads: FaGoodreadsG,
    medium: FaMediumM,
    instagram: FaInstagram,
    linkedin: FaLinkedinIn,
    twitter: FaTwitter,
    youtube: FaYoutube,
    strava: FaStrava,
  }

  const Icon = icons[name]

  return Icon ? <Icon {...params} /> : null
}

SocialIcon.propTypes = {
  name: SocialType.name,
}

export default SocialIcon
