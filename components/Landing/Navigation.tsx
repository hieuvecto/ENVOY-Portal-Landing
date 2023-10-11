import { Fragment, MouseEventHandler, useRef, useState } from "react"

import DehazeIcon from "@mui/icons-material/Dehaze"
import { Box, Button, IconButton, Menu, MenuItem } from "@mui/material"
import { Link as ScrollLink } from "react-scroll"

import logo from "@/assets/images/envoy-white.png"
import Link from "next/link"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward"

const Navigation = () => {
  const [toggle, setToggle] = useState(false)
  const [follow, setFollow] = useState<null | HTMLElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  const handleToggle = (
    e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>
  ) => {
    console.log("setToggle")
    setToggle(!toggle)
  }

  const handleFollowClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setFollow(e.currentTarget)
  }

  const handleFollowClose = () => {
    setFollow(null)
  }

  return (
    <Fragment>
      <nav className="h-[70px]">
        <div
          className={`navbar-backdrop fixed ${
            !toggle && "hidden"
          } inset-0 bg-gray-800 opacity-25 z-40`}
          onClick={handleToggle}
        />
        <div className="container">
          <div className="flex justify-between h-[70px] items-center">
            <div>
              <Link href="/">
                <img src={logo.src} alt="envoy portal logo" className="w-24" />
              </Link>
            </div>
            <Box
              sx={{
                display: {
                  xs: toggle ? "block" : "none",
                  sm: "block",
                },
              }}
              className="
              absolute
              sm:relative
              left-0
              top-[70px]
              sm:top-auto
              bg-[#0D0B0A]
              sm:bg-transparent
              z-50
              w-full
              sm:w-auto
              px-8
              py-4
              pb-10
              sm:p-0
            "
            >
              <ul className="sm:flex sm:space-x-5 space-y-4 sm:space-y-0 font-medium items-center">
                <li>
                  <div>
                    <ScrollLink
                      to="features"
                      smooth={true}
                      className="cursor-pointer"
                    >
                      <Button
                        variant="text"
                        className="text-white normal-case max-md:justify-start"
                      >
                        Feature
                      </Button>
                    </ScrollLink>
                  </div>
                </li>
                <li>
                  <div>
                    <ScrollLink
                      to="about"
                      smooth={true}
                      className="cursor-pointer"
                    >
                      <Button
                        variant="text"
                        className="text-white normal-case max-md:justify-start"
                      >
                        About
                      </Button>
                    </ScrollLink>
                  </div>
                </li>
                <li>
                  <div>
                    <Button
                      variant="text"
                      onClick={handleFollowClick}
                      className="text-white normal-case max-md:justify-start"
                      endIcon={<ExpandMoreIcon />}
                    >
                      Follow
                    </Button>
                    <Menu
                      anchorEl={follow}
                      open={Boolean(follow)}
                      onClose={handleFollowClose}
                      MenuListProps={{
                        "aria-labelledby": "basic-button",
                      }}
                    >
                      <MenuItem onClick={handleFollowClose}>
                        <a href="https://twitter.com/envoycorp" target="_blank">
                          <Button
                            variant="text"
                            onClick={handleFollowClick}
                            className="text-white"
                            endIcon={<ArrowOutwardIcon />}
                          >
                            Twitter
                          </Button>
                        </a>
                      </MenuItem>
                      <MenuItem onClick={handleFollowClose}>
                        <a href="https://t.me/envoyportal" target="_blank">
                          <Button
                            variant="text"
                            onClick={handleFollowClick}
                            className="text-white"
                            endIcon={<ArrowOutwardIcon />}
                          >
                            Telegram
                          </Button>
                        </a>
                      </MenuItem>
                    </Menu>
                  </div>
                </li>
                <li>
                  <Link href="#">
                    <Button
                      variant="text"
                      className="text-white normal-case max-md:justify-start"
                    >
                      Blog
                    </Button>
                  </Link>
                </li>
                <li>
                  <div>
                    <Link href="https://app.envoyportal.com">
                      <Button
                        variant="contained"
                        className="bg-slate-400 bg-opacity-20 rounded-full text-white"
                      >
                        <div className="justify-center items-center gap-2 inline-flex">
                          <div>Launch App</div>
                          {/* <div>{">"}</div> */}
                        </div>
                      </Button>
                    </Link>
                  </div>
                </li>
              </ul>
            </Box>
            <div className="sm:hidden">
              <IconButton onClick={handleToggle} sx={{ color: "white" }}>
                <DehazeIcon />
              </IconButton>
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  )
}

export default Navigation
