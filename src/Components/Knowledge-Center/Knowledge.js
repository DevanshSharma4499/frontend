import React, { useState } from "react";
import Knowdetail from "./Knowdetail";

const Knowledge = () => {
  const [toggle, settoggle] = useState(1);

  function updateToggle(id) {
    settoggle(id);
  }

  const [selectedItem, setSelectedItem] = useState("item1");

  const handleChange = (event) => {
    setSelectedItem(event.target.value);
  };

  const [currentSection, setCurrentSection] = useState(1);

  const handleClick = (section) => {
    setCurrentSection(section);
  };

  return (
    <div>
      <div className="bg-[#f8f8f8]">
        <div class="knowledge-banner">
          {/* <img class="mob-hide" src={images[selectedItem]} alt="VigyanVeda Constipation Banner" /> */}
          {selectedItem === "" && (
            <div>
              <img
                src="https://cdn.shopify.com/s/files/1/0575/8920/3125/files/Knowledge_Center_banner_3.jpg?v=1645100614"
                alt="Selected Image"
              />
            </div>
          )}
          {selectedItem === "item1" && (
            <div>
              <img
                src="https://cdn.shopify.com/s/files/1/0575/8920/3125/files/Knowledge_Center_banner_3.jpg?v=1645100614"
                alt="Selected Image"
              />
            </div>
          )}{" "}
          {selectedItem === "item2" && (
            <div>
              <img
                src="https://cdn.shopify.com/s/files/1/0575/8920/3125/files/Knowledge_Center_banner_a4b79260-4d3e-4896-a8c6-d656844a2f6f.jpg?v=1645009992"
                alt="Selected Image"
              />
            </div>
          )}{" "}
          {selectedItem === "item3" && (
            <div>
              <img
                src="https://cdn.shopify.com/s/files/1/0575/8920/3125/files/5-min.jpg?v=1644670489"
                alt="Selected Image"
              />
            </div>
          )}
          {selectedItem === "item4" && (
            <div>
              <img
                src="https://cdn.shopify.com/s/files/1/0575/8920/3125/files/KC-_Banner_Nutrition_Care.jpg?v=1644833640"
                alt="Selected Image"
              />
            </div>
          )}
          {selectedItem === "item5" && (
            <div>
              <img
                src="https://cdn.shopify.com/s/files/1/0575/8920/3125/files/KC-_Banner_-_Immunity_Care.jpg?v=1644833640"
                alt="Selected Image"
              />
            </div>
          )}
          {selectedItem === "item6" && (
            <div>
              <img
                src="https://cdn.shopify.com/s/files/1/0575/8920/3125/files/Knowledge_Center_banner_2.jpg?v=1644849809"
                alt="Selected Image"
              />
            </div>
          )}
          {selectedItem === "item7" && (
            <div>
              <img src='https://cdn.shopify.com/s/files/1/0575/8920/3125/files/4-min.jpg?v=1644670489" alt="VigyanVeda Sexual PF Banner"> alt="Selected Image' />
            </div>
          )}
        </div>
        <div className="w-full px-4">
          <div className="flex align-middle items-center">
            <div className="w-[22%] relative p-5 ">
              <select
                className=" relative w-full cursor-default rounded-lg bg-white py-4 pl-3 pr-10 text-lg text-left text-gray-900 shadow-md ring-1 ring-inset ring-gray-200 focus:outline-none focus:ring-2 focus:ring-green-900 sm:text-sm sm:leading-6"
                value={selectedItem}
                onChange={handleChange}
              >
                {/* <option value="">Select Your Care</option> */}
                <option value="item1">Digestive Care</option>
                <option value="item2">Piles Care</option>
                <option value="item3">Weight Care</option>
                <option value="item4">Nutrition Care</option>
                <option value="item5">Immunity Care</option>
                <option value="item6">Womens Wellness Care</option>
                <option value="item7">Sexual care Care</option>
              </select>
            </div>

            <div className="p-5 w-[78%] hispan">
              {selectedItem === "item1" && (
                <div>
                  <div id="Digestive_Care">
                    <span onClick={() => handleClick(1)}>
                      <a href="#Stomach Gas" class="digestive-kit">
                        {" "}
                        Stomach Gas{" "}
                      </a>
                    </span>
                    <span onClick={() => handleClick(2)}>
                      <a href="#Acidity">Acidity </a>
                    </span>
                    <span onClick={() => handleClick(3)}>
                      <a href="#Constipation">Constipation </a>
                    </span>
                  </div>
                </div>
              )}
              
              {selectedItem === "item2" && (
                <div>
                  <div id="Piles_care">
                    <span onClick={() => handleClick(4)}>
                      <a href="#Piles"> Piles</a>
                    </span>
                    <span onClick={() => handleClick(5)}>
                      <a href="#Fissure">Fissure </a>
                    </span>
                    <span onClick={() => handleClick(6)}>
                      <a href="#Fistula">Fistula </a>
                    </span>
                  </div>
                </div>
              )}
              {selectedItem === "item3" && (
                <div>
                  <div id="Weight_care">
                    <span onClick={() => handleClick(7)}>
                      <a href="#Weight Loss">Weight Loss</a>
                    </span>
                    <span onClick={() => handleClick(8)}>
                      <a href="#Weight Gain">Weight Gain</a>
                    </span>
                  </div>
                </div>
              )}
              {selectedItem === "item4" && (
                <div>
                  <div id="Nutrition_care">
                    <span onClick={() => handleClick(9)}>
                      <a>Nutrition Deficiency </a>
                    </span>
                  </div>
                </div>
              )}
              {selectedItem === "item5" && (
                <div>
                  <div id="Immuntiy_care">
                    <span onClick={() => handleClick(10)}>
                      <a href="#Low Immunitty">Low Immunity </a>
                    </span>
                  </div>
                </div>
              )}
              {selectedItem === "item6" && (
                <div>
                  <div id="Women_wellness">
                    <span onClick={() => handleClick(11)}>
                      <a href="#Irregular Periods">Irregular Periods </a>
                    </span>
                    <span onClick={() => handleClick(12)}>
                      <a href="#Menopause">Menopause </a>
                    </span>
                    <span onClick={() => handleClick(13)}>
                      <a href="#PCOS/PCOD ">PCOS/PCOD </a>
                    </span>
                  </div>
                </div>
              )}
              {selectedItem === "item7" && (
                <div>
                  <div id="Sexual_care">
                    <span onClick={() => handleClick(14)}>
                      <a
                        href="#Premature
                  Ejaculation"
                      >
                        {" "}
                        Premature Ejaculation{" "}
                      </a>
                    </span>
                    <span onClick={() => handleClick(15)}>
                      <a href="#Low Libido">Low Libido </a>
                    </span>
                    <span onClick={() => handleClick(16)}>
                      <a
                        href="#Erectile
                  Dysfunction"
                      >
                        {" "}
                        Erectile Dysfunction{" "}
                      </a>
                    </span>
                    <span onClick={() => handleClick(17)}>
                      <a href="#Nightfall">Nightfall </a>
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {currentSection === 2 && (
        <Knowdetail
          tittle="Acidity"
          text="The stomach secretes acid which is used to digest food. Spicy food or a weak LES(muscles that prevent stomach contents from travelling back) can trigger excess production of acid causing pain and a burning sensation which is called acidity."
          src="https://cdn.shopify.com/s/files/1/0575/8920/3125/files/KC_-Acidity.jpg?v=1645099952"
          h1="Carbonated Drinks"
          h2="Stomach Ulcer"
          h3="Eating Habits"
          h4="Food Intolerance"
          h5="Frequent Constipation"
          h6="Bacteria Overgrowth"
          p1="Drinks like soda, beer contributes to more swallowed air in the tummy that causes gas."
          p2="It can cause a feeling of bloating, heaviness and pain in the morning or after meals."
          p3="Not chewing the food properly increase the efforts of the digestive system that causes gas."
          p4="The inability to break certain food particles in the digestive system causes gas."
          p5="Constipation obstructs the discharge of intestinal matter that leads to stomach gas."
          p6="Due to surgeries or medical issues, excess bacterial growth can occur in the small intestine."
          name="Causes Of Acidity"
          head="The problem of acidity occurs due to"
          name2="Do You Know"
          head2="Find home remedies, exercise, yoga and more to treat your problems here"
          kimg1="./images/kimg/9.png"
          kimg2="./images/kimg/10.png"
          kimg3="./images/kimg/11.png"
          kimg4="./images/kimg/12.png"
          kimg5="./images/kimg/13.png"
          kimg6="./images/kimg/14.png"
        />
      )}

      {currentSection === 1 && (
        <div>
          <Knowdetail
            tittle="Stomach Gas"
            text="Swallowed air while eating or drinking and undigested food in our intestine produces gas. This gas is released through the rectum or mouth, but excessive gas that can be trapped in the digestive tract causes discomfort is called stomach gas."
            src="https://cdn.shopify.com/s/files/1/0575/8920/3125/files/Knowledge_-_Video_thumbnail_f9cc127b-2d43-4791-842c-fdd1d6e41938.jpg?v=1645103426"
            h1="Carbonated Drinks"
            h2="Stomach Ulcer"
            h3="Eating Habits"
            h4="Food Intolerance"
            h5="Frequent Constipation"
            h6="Bacteria Overgrowth"
            p1="Drinks like soda, beer contributes to more swallowed air in the tummy that causes gas."
            p2="It can cause a feeling of bloating, heaviness and pain in the morning or after meals."
            p3="Not chewing the food properly increase the efforts of the digestive system that causes gas."
            p4="The inability to break certain food particles in the digestive system causes gas."
            p5="Constipation obstructs the discharge of intestinal matter that leads to stomach gas."
            p6="Due to surgeries or medical issues, excess bacterial growth can occur in the small intestine."
            name="Causes Of Stomach Gas"
            head="The problem of Stomach Gas occurs due to"
            name2="Do You Know"
            head2="Find home remedies, exercise, yoga and more to treat your problems here"
            kimg1="./images/kimg/9.png"
            kimg2="./images/kimg/10.png"
            kimg3="./images/kimg/11.png"
            kimg4="./images/kimg/12.png"
            kimg5="./images/kimg/13.png"
            kimg6="./images/kimg/14.png"
          />
          {/* <section class="relative py-10 overflow-hidden bg-black sm:py-16 lg:py-24 xl:py-32">
            <div class="absolute inset-0">
              <img class="object-cover w-full h-full md:object-left md:scale-150 md:origin-top-left" src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/5/girl-working-on-laptop.jpg" alt="" />
            </div>

            <div class="absolute inset-0 hidden bg-gradient-to-r md:block from-black to-transparent"></div>

            <div class="absolute inset-0 block bg-black/60 md:hidden"></div>

            <div class="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
              <div class="text-center md:w-2/3 lg:w-1/2 xl:w-1/3 md:text-left">
                <h2 class="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">Stomach Gas</h2>

                <p class="mt-4 text-base text-gray-200">Swallowed air while eating or drinking and undigested food in our intestine produces gas. This gas is released through the rectum or mouth, but excessive gas that can be trapped in the digestive tract causes discomfort is called stomach gas.</p>

                <form action="#" method="POST" class="mt-8 lg:mt-12">
                  <div class="flex flex-col items-center sm:flex-row sm:justify-center">
                    <div class="flex-1 w-full min-w-0 px-4 sm:px-0">

                    </div>


                  </div>
                </form>
              </div>
            </div>
          </section> */}
          <div />
        </div>
      )}
      {/* section 1 end hear */}

      {currentSection === 3 && <div></div>}
      {currentSection === 4 && (
        <div>
          <h2>Section 4</h2>
          <p>This is the content of section 4.</p>
        </div>
      )}

      {currentSection === 5 && (
        <div>
          <h2>Section 5</h2>
          <p>This is the content of section 5.</p>
        </div>
      )}

      {currentSection === 6 && (
        <div>
          <h2>Section 6</h2>
          <p>This is the content of section 6.</p>
        </div>
      )}
      {currentSection === 7 && (
        <div>
          <h2>Section 7</h2>
          <p>This is the content of section 7.</p>
        </div>
      )}

      {currentSection === 8 && (
        <div>
          <h2>Section 8</h2>
          <p>This is the content of section 8.</p>
        </div>
      )}

      {currentSection === 9 && (
        <div>
          <h2>Section 9</h2>
          <p>This is the content of section 9.</p>
        </div>
      )}
      {currentSection === 10 && (
        <div>
          <h2>Section 10</h2>
          <p>This is the content of section 10.</p>
        </div>
      )}

      {currentSection === 11 && (
        <div>
          <h2>Section 11</h2>
          <p>This is the content of section 11.</p>
        </div>
      )}

      {currentSection === 12 && (
        <div>
          <h2>Section 12</h2>
          <p>This is the content of section 12.</p>
        </div>
      )}

      {currentSection === 13 && (
        <div>
          <h2>Section 13</h2>
          <p>This is the content of section 13.</p>
        </div>
      )}

      {currentSection === 14 && (
        <div>
          <h2>Section 14</h2>
          <p>This is the content of section 14.</p>
        </div>
      )}
      {currentSection === 15 && (
        <div>
          <h2>Section 15</h2>
          <p>This is the content of section 15.</p>
        </div>
      )}

      {currentSection === 16 && (
        <div>
          <h2>Section 16</h2>
          <p>This is the content of section 16.</p>
        </div>
      )}

      {currentSection === 17 && (
        <div>
          <h2>Section 17</h2>
          <p>This is the content of section 17.</p>
        </div>
      )}
    </div>
  );
};

export default Knowledge;
