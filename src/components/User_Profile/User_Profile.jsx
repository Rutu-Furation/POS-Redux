import React, { useState } from "react";
import "./User_Profile.css";
import { BiUser } from "react-icons/bi";
import { RiKey2Line } from "react-icons/ri";
import { MdOutlineLogout } from "react-icons/md";

const User_Profile = () => {
  const [showProfile, setShowProfile] = useState(false);

  const handleClick = () => {
    setShowProfile(!showProfile);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-3">
          <div className="profile-container" onClick={handleClick}>
            <div>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAAB9CAMAAACyLvAAAAAAOVBMVEX///+dnZ3c3NyYmJjGxMXk5OTf39/V1dWhoaH7+/vZ2dmxsbHBwcGVlZWqqqrq6uq3t7f09PTLy8sTffwGAAAE0klEQVRoge2bYbu0EBCGQyES+f8/9kVbqbVSOzrvh30+7XUucTdmkJnTND/99BOIbGu76S8BtCJEEWkfh5iYseHHiIKIGh5l0Ma9ee9/SYLQwmAfG78fiBtXepJxBfAM8iEzTPOwstdDPL5H4I8gaLSMqw4ATk8gaPU2bGyFsTrCxHMAYXa6qgDiFAARYurZoTfZKVgZUDUz8HfXS0uxKuP34zkAfy2RCtcgOEZ/yv52XH5peAB8CkBQ2y2eSiQ4QJ+JAuKlkBGUrq3gXYEdV2DiJl1KaYwZvFpGKcYbAeI9MMHBBOPAhMA0EvaKCIiABdgtxkSyZciD6BhBwhK00SSQNjl6INjOC0jBTkP0bpx9BMA0ClkCuib00SRkADC2EQHomWlzA5IFwCxyRQNJIBYCMmQB6rniatyxywLsHIFXIbB5AIzjEwQkwfJmPD8H3ghmO79DEryWgzMv8GJ1CfKBcDQCJMHLD7g4BXAIVWIBz9E4npvAEdgXAegRYZoJTAnBEpFkgCRoSKkjBoSwP8Guyo2cV/pCghAPsDvTHAwloRAkfGsF++ES+iQloeAVbKBAAWZXvEYAfEbqQixcIYDdnJsJy8sEA+hHiw4xXrQkrrNgQWOhw8wvyoUAgYBjAXhU7Wn4ErhEMFIBGI6eQF4jcEd6SILGEbg1abxiA4ZBCdzp0DnCFQLfFphAcCILF2W3KvtNDNoGbsMr25y95uUTEKDRjqBVhVujp/VnGdD7LO1eSRRPgmvrYUHXxN4btRxgbgu7O598KiXtAArQTKVbwibo27TrRoC+R7psBPib3Ulc8URRI//WN+UAeuqhJyGo3Bdq3e/rYl+oYoDGnxYLRSsBlBNUuFi/SFAvzaP/eBJcQP7xJDSlRqgVCV59STzWNEGZEWqawOncCHVNUBCRFQPhpbPNoX72/cQT6ua9ZwKWJaiT791pshlnpPaBYpQJZxBs+4QNMBs+TISwbfuADZwnsjaZ6GCtk629HDTGfRRT65O8CQM4DQr2Du2oiatwt+xHs2LJu7oP9fD+gYATVNEMdL3dnke0LMi2mwafZ6pS/xAAyHa/ztq0AgF01ntRp+IbfmE/EyBVZXegap9joEkzzARVClG6RLotYYYXAXR2odmKsfZ5FvFmh2HNeEJHxFriss/0ULwPhdZuOVfYs9KaRExcqFEqxByWYku0+So5sNF7zbYsJkK5GzUaZf99sQjEN/wkDCdkV4gzpGtQjgChSohLpr+ZjcnKRB0kkR+u1Wh7bBooxtuFvGxMVGGGXlGqFoYKmW6OiLoDQc2H4ec+x6M3UGwy7R2EvJTwmBgnuf7QXJMUA9iz0kHnE8WGmAZUUAlJeDQVNGuA9RFUlP3S5uz11w63LaKgdHF+RJkzBi2LCkH3CMUAXipbSjsVv/8LIfhj2RRsD2Vqu0VxIeqiMTjh1acISp/pCytx9335eTivIH6TSplhqwa/Ih6ScNdF3gtZu+sGCLLdDRN4HU9R3b1u3GZ9LB8tf3R3ljwvR/8kXlBE/EnxRFwJ6IPk7Sfj0rnblvTd3H+UtCvB/U6+01rKejcOvidYVqYvnOk7rbUq5o8A3Kre/wh+BP8VgSLzP0GQVUpFf1HRn+KmSn3bdCHQ3V+p+tXfTz8V6x/4lkZBg6tfiwAAAABJRU5ErkJggg=="
                alt="User Profile"
                style={{ width: "40px", height: "40px", borderRadius: "100%" }}
              />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "3px",

                width: "130px",
              }}
            >
              <p style={{ fontSize: "18px", color: "gray" }}>Admin User</p>
              <p style={{ fontSize: "14px", marginTop: "-25px" }}>
                super Admin
              </p>
            </div>

            {showProfile && (
              <div className="profile-content">
                <div>
                  <span>
                    <BiUser />{" "}
                  </span>{" "}
                  <p>Change Profile</p>
                </div>
                <div>
                  <span>
                    <RiKey2Line />
                  </span>
                  <p>Change Password</p>
                </div>
                <div>
                  <span>
                    <MdOutlineLogout />
                  </span>
                  <p>Logout</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default User_Profile;
