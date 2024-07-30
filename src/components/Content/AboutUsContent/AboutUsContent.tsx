import React from "react";
import "./AboutUsContent.css";

import school from "../../../assets/school-image.jpg";
import teacher_photo from "../../../assets/teacher_photo.png";

const AboutUsContent = () => {


    return (
        <div className="about_us_main">
            <div className="about_school">
                <h1>Наша школа</h1>
                <img src={school} alt="school img" className="about_school_image"/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lectus lacus, tempor id molestie ac, dictum ac ligula. Proin volutpat ornare ligula, eget sollicitudin diam maximus sed. Donec pellentesque urna nunc, vitae faucibus nulla tristique at. Vestibulum cursus, elit ac pulvinar euismod, metus libero dapibus risus, non fringilla orci ligula vitae leo. Vestibulum sed nibh magna. Curabitur lobortis sapien pulvinar, vestibulum ipsum ac, molestie ante. Ut ullamcorper sem turpis, fringilla ornare turpis laoreet vel. Sed volutpat facilisis tellus, eu maximus sem malesuada et.</p>
                <p> Etiam accumsan dapibus diam, in tempus magna vehicula eget. Aliquam erat volutpat. Etiam ac tempor urna. Quisque pellentesque aliquam nibh et molestie. Ut pellentesque nulla in risus tempus imperdiet. Mauris bibendum mauris sagittis sem feugiat sagittis. Vivamus varius ut risus volutpat faucibus.
                    Nam vestibulum scelerisque quam. Aenean eget vestibulum erat, molestie commodo urna. Phasellus ut rhoncus dui. Suspendisse nisl est, molestie porttitor dolor condimentum, suscipit dictum lorem. Suspendisse mollis lacinia eros sed venenatis. Sed vitae urna nulla. Proin sed mi nec lorem elementum sagittis eu ut quam. Fusce feugiat tempor sapien id tempor. Aliquam erat volutpat. Sed auctor libero in dictum feugiat. Morbi ac fringilla felis. </p>
            </div>

            <div className="about_teacher">
                <h1>Наш преподаватель</h1>
                <img src={teacher_photo} alt="teacher photo" className="about_teacher_photo"/>
                <p>Nulla at auctor metus. Ut dictum vehicula lorem, placerat eleifend urna viverra ac. Nunc lacinia vel urna vitae gravida. Integer ullamcorper lobortis diam at lacinia. Mauris vel molestie arcu, ut pellentesque mauris. Curabitur mi lacus, ultrices vitae nisl eget, cursus tristique erat. Mauris et aliquam arcu.</p>
                <p>Suspendisse viverra arcu ac molestie efficitur. Maecenas eget mauris semper, mollis mauris sit amet, iaculis augue. In hac habitasse platea dictumst. Suspendisse at lacus ut massa cursus lacinia. Morbi vehicula a arcu id faucibus. Nunc nec libero eu odio imperdiet sagittis. Aenean id sodales risus. Sed lobortis lectus a viverra imperdiet. Ut enim nisi, euismod eu gravida suscipit, rutrum lacinia diam. </p>
                <p>Nam convallis tellus vitae iaculis varius. Integer pretium purus nec nisl vulputate lobortis. Curabitur eu lobortis lacus. Morbi mattis, metus et mollis mattis, ipsum augue pulvinar diam, auctor rhoncus eros nisl sed nisi. In eget eros non velit consectetur rutrum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam turpis erat, consectetur a ornare in, iaculis et tellus. Donec a nunc eu quam sagittis efficitur. Proin viverra dignissim blandit. Maecenas varius sem vitae bibendum dapibus. Nulla eu ipsum sit amet nibh sodales finibus. Morbi sit amet scelerisque enim. Nam velit odio, dapibus non libero sed, ultrices luctus massa: </p>
                <ul className="about_teacher-list">
                    <li className="about_teacher-list_item">
                        <p>Aliquam dui nulla, porta vel justo non, sagittis consequat elit.</p>
                    </li>
                    <li className="about_teacher-list_item">
                        <p>Fusce a accumsan ligula. Donec nec nibh magna.</p>
                    </li>
                    <li className="about_teacher-list_item">
                        <p>Aliquam sodales laoreet lobortis.</p>
                    </li>
                    <li className="about_teacher-list_item">
                        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque auctor malesuada dolor pulvinar tristique.</p>
                    </li>
                    <li className="about_teacher-list_item">
                        <p>Nam condimentum pretium lectus, vitae egestas ex elementum at. Etiam iaculis commodo erat a laoreet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse quis lectus in magna imperdiet lobortis.</p>
                    </li>
                </ul>
            </div>
        </div>
    )
    
}

export default AboutUsContent;
