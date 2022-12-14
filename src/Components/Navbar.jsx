import { Flex, Image, Box,HStack, Text,Input, Spacer, VStack, Center } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logOut } from '../Redux/Auth/action';
import logo from "./Golden Minimal Floral Frame Design Studio Logo (1).png";

const Navbar = () => {
    const store = useSelector((store)=> store.AuthReducer);
    const productStore = useSelector((s)=> s.AppReducer)
const dispatch = useDispatch();
const handleLogout  = ()=>{
    dispatch(logOut)
}
  return (
    <Box w="100%">
        <Box bg="#1e2c40">
        <VStack >
        <HStack bg="#1e2c40" justifyContent="space-evenly">
               <Link to="/">
               <Image src={logo} width="250px" height="100px" >

</Image></Link>
            <Input bg="white" width="80em" margin="0px" border="0px"/>
            <Spacer/>
           
           {
            store.isAdmin || store.isAuth ? <Text color={"white"} fontSize="4xl" onClick={handleLogout}>Log out</Text> :  <Link to="/login"><Text fontSize='4xl' color="white">Sign In</Text></Link>
           } 
            </HStack>
            <Box  ><Center>

                <HStack p="1em" fontSize="3xl" gap="2em" bg="#1e2c40" color="white" w="100%">
                    <Text >
                        <Link to="/product">
                        New</Link>
                    </Text>
                    <Text>
                        <Link to="/product">
                        Best Selling</Link>
                    </Text>
                    <Text> 
                        <Link to="/product">
                        Brand</Link>
                    </Text>
                    <Text> 
                        <Link to="/product">
                        Clearance
                        </Link>
                    </Text>
                    <Text>Deals</Text>
                    <Text> Coupon</Text>
                    <Text> App only</Text>
                    {
                        store.isAdmin ? <Text>
                            <Link to="/admin">ADMIN</Link>
                        </Text> : productStore.orderAuth && <Text><Link to="/order">Orders</Link></Text>
                    }
                    <Link to={"/cart"}> 
                    <AiOutlineShoppingCart color="white" fontSize="3rem"/>
                    </Link>
                   {
                     store.isAdmin || store.isAuth ? "":  <Link to="/signup"> <Text> Sign Up</Text></Link>
                   }

                </HStack>
            </Center>
            </Box>
        </VStack>
                
        </Box>
    </Box>
  )
}

<<<<<<< HEAD
      <div id="accountDivxyz">
        <div
          id="shippingMainDivxyz"
          onMouseEnter={() => {
            handleShippingPop(true);
          }}
          onMouseLeave={() => {
            handleShippingPop(false);
          }}
        >
          <div>Ship to</div>
          <div id="shippingDivxyz">
            <div id="indianFlagxyz">
              <img src={indianFlagpng} h="20px" w="25px" mr="5px" alt="" />
            </div>
            <div id="currencyDivxyz">
              /INR
              <IoMdArrowDropdown />
            </div>
            {shipping ? <ShippingPop></ShippingPop> : null}
          </div>
        </div>


        <div
          id="signInDivxyz"
          onMouseEnter={() => {
            handleSigninPop(true);
          }}
          onMouseLeave={() => {
            handleSigninPop(false);
          }}
        >
          <AiOutlineUser />
          <p>sign in</p>
          {signin ? <SignInPop></SignInPop> : null}
const SignInPop = () => {
    return (
        <div id="signInPop">
            <div id="signPointer"></div>
            <div id="welcomeGreet">Welcome to Geekbuying</div>
            <div id="buttonDivSignInPop">
            
              <Link to="/signup">  <button id="joinBtn">Join</button></Link> 
               <Link to="/login"> <button id="signInBtn">Sign In</button></Link>
            
            </div>
            <div id="topDiv"></div>
            <div id="orDiv">or</div>
            <div id="googleAuthDiv"><FcGoogle/></div>
        </div>

        <div
          id="cartDivxyz"
          onMouseEnter={() => {
            handleCartPop(true);
          }}
          onMouseLeave={() => {
            handleCartPop(false);
          }}
        >
          <CgShoppingCart />
          <div id="cartCounterxyz">0</div>
          {cart ? <CartPop></CartPop> : null}
        </div>
      </div>
    </div>
  );
};

const ShippingPop = () => {
  return (
    <div id="shippingPopDivxyz">
      <div id="pointerxyz"></div>
      <h3>Select Regional Settings</h3>
      <h4>Ship to</h4>
      <div name="country" id="countryxyz">
        <li value="india">
          <div>
            {<img src={indianFlagpng} alt="" />}
            {<p>India</p>}
          </div>
          <div>
            <IoMdArrowDropdown />
          </div>
        </li>
      </div>
      <h4>Currency</h4>
      <div>
        <li value="indiaxyz">
          <div>{<p>INR ₹</p>}</div>
          <div>
            <IoMdArrowDropdown />
          </div>
        </li>
      </div>
      <button>Save</button>
    </div>
  );
};

const SignInPop = () => {
  return (
    <div id="signInPopxyz">
      <div id="signPointerxyz"></div>
      <div id="welcomeGreetxyz">Welcome to Geekbuying</div>
      <div id="buttonDivSignInPopxyz">
        <Link to="/login">
          <button id="joinBtnxyz">Join</button>
          <button id="signInBtnxyz">Sign In</button>
        </Link>
      </div>
      <div id="topDivxyz"></div>
      <div id="orDivxyz">or</div>
      <div id="googleAuthDivxyz">
        <FcGoogle />
      </div>
    </div>
  );
};

const CartPop = () => {
  return (
    <div id="cartPopDivxyz">
      <div id="cartPointerxyz"></div>
      {
        <>
          <div id="cartItemsxyz"></div>
          <div id="cartTotalxyz">
            <div id="totalItemsxyz"></div>
            <div id="totalPricexyz"></div>
          </div>
          <button id="cartPopButtonxyz">View My Cart</button>
        </>
      }
    </div>
  );
};
const NavTop = () => {
  return (
    <div id="navTopxyz">
      <div id="navTop_contentxyz">
        <div>
          <Arrow icon={<ImMobile2 />} text={"Save BIG with our app!"}></Arrow>
        </div>
        <div>
          <Arrow text={"Language"}></Arrow>
        </div>
        <div>
          <Arrow text={"Support Center"}></Arrow>
        </div>
      </div>
    </div>
  );
};

const Arrow = ({ icon, text }) => {
  const [arrow, setArrow] = useState(false);
  const handleArrow = (data) => {
    setArrow(data);
  };
  return (
    <div
      className="navTop_content_subxyz"
      onMouseEnter={() => {
        handleArrow(true);
      }}
      onMouseLeave={() => {
        handleArrow(false);
      }}
    >
      <p>{icon}</p>
      <p>{text}</p>
      <p>{arrow ? <IoIosArrowUp /> : <IoIosArrowDown />}</p>
    </div>
  );
};

const NavbarBottom = () => {
  const [mount, setMount] = useState(false);
  const handleMount = (data) => {
    setMount(data);
  };
  return (
    <div id="NavbarBottomxyz">
      <div id="NavbarBottomContentxyz">
        <div
          id="NavbarBottomCategoriesxyz"
          className="NavbarBottomSubxyz"
          onMouseEnter={() => {
            handleMount(true);
          }}
          onMouseLeave={() => {
            handleMount(false);
          }}
        >
          <>
            <IoMdMenu />
            <p>Categories</p>
          </>
          {mount ? <NavbarBottomDrop1></NavbarBottomDrop1> : null}
        </div>

        <Link to={"/product"}>
          <div className="NavbarBottomSubxyz">New</div>
        </Link>
        <Link to={"/product"}>
          <div className="NavbarBottomSubxyz">Bestselling</div>
        </Link>
        <div className="NavbarBottomSubxyz">Brand</div>
        <div className="NavbarBottomSubxyz">Clearance</div>
        <div className="NavbarBottomSubxyz">Deals</div>
        <div className="NavbarBottomSubxyz">Coupon</div>
        <div className="NavbarBottomSubxyz">App Only</div>
      </div>
    </div>
  );
};

const NavbarBottomDrop1 = () => {
  const [mount, setMount] = useState(false);
  const handleMount = (data) => {
    setMount(data);
  };
  const [mount2, setMount2] = useState(null);
  const handleMount2 = (data) => {
    setMount2(data);
  };
  return (
    <div
      id="NavbarBottomDrop1xyz"
      onMouseEnter={() => {
        handleMount(true);
      }}
      onMouseLeave={() => {
        handleMount(false);
      }}
    >
      <ul>
        <li
          onMouseEnter={() => {
            handleMount2("local_warehouse");
          }}
        >
          Local Warehouses
        </li>
        <li
          onMouseEnter={() => {
            handleMount2("sports_outdoors");
          }}
        >
          Sports &amp; Outdoors
        </li>
        <li
          onMouseEnter={() => {
            handleMount2("smart_home_garden");
          }}
        >
          Smart Home &amp; Garden
        </li>
        <li
          onMouseEnter={() => {
            handleMount2("consumer_electronics");
          }}
        >
          Consumer Electronics
        </li>
        <li
          onMouseEnter={() => {
            handleMount2("phone_accessories");
          }}
        >
          Phones &amp; Accessories
        </li>
        <li
          onMouseEnter={() => {
            handleMount2("tv_boxex_mini_pcs");
          }}
        >
          TV Boxes &amp; Mini PCs
        </li>
        <li
          onMouseEnter={() => {
            handleMount2("computer_tablet_accessories");
          }}
        >
          Computers, Tablets &amp; Accessories
        </li>
        <li
          onMouseEnter={() => {
            handleMount2("toy_hobbies");
          }}
        >
          Toys &amp; Hobbies
        </li>
        <li
          onMouseEnter={() => {
            handleMount2("wearable_devices");
          }}
        >
          Wearable Devices
        </li>
        <li
          onMouseEnter={() => {
            handleMount2("security_system");
          }}
        >
          Security System
        </li>
        <li
          onMouseEnter={() => {
            handleMount2("automobile_motorcycle");
          }}
        >
          Automobiles &amp; Motorcycles
        </li>
        <li
          onMouseEnter={() => {
            handleMount2("fashion");
          }}
        >
          Fashion
        </li>
      </ul>
      {mount ? <NavbarBottomDrop2 mount2={mount2}></NavbarBottomDrop2> : null}
    </div>
  );
};

const NavbarBottomDrop2 = ({ mount2 }) => {
  let data = navData[mount2];
  //console.log(data)
  return (
    <div
      id="NavbarBottomDrop2xyz"
      key={mount2}
      className={
        mount2 === "local_warehouse"
          ? "class1"
          : mount2 === "sports_outdoors"
          ? "class2"
          : mount2 === "smart_home_garden"
          ? "class2"
          : mount2 === "consumer_electronics"
          ? "class2"
          : mount2 === "phone_accessories"
          ? "class00"
          : mount2 === "tv_boxex_mini_pcs"
          ? "class00"
          : mount2 === "computer_tablet_accessories"
          ? "class02"
          : mount2 === "toy_hobbies"
          ? "class02"
          : mount2 === "wearable_devices"
          ? "class00"
          : mount2 === "security_system"
          ? "class00"
          : mount2 === "automobile_motorcycle"
          ? "class00"
          : mount2 === "fashion"
          ? "class00"
          : null
      }
    >
      {mount2
        ? Object.entries(data).map(([key, val]) => {
            return (
              <div className="NavbarBottomDropItemsxyz" key={key}>
                <dl key={key}>
                  <dt key={key}>{key !== "image" ? key : null}</dt>
                  {key !== "image" && val.map((item) => <dd key={item}>{item}</dd>)}

                  {key === "image" ? (
                    <div className="imgDivxyz">
                      <img src={val} />
                    </div>
                  ) : null}
                </dl>
              </div>
            );
          })
        : null}
    </div>
  );
};

=======
export default Navbar
>>>>>>> 33e895cf6fc1f71fc1579cf26ba37531e226db03
