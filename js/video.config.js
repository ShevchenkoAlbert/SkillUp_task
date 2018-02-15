let videos = [];
const videosBack = [
{
    "url": "./video/VfE_html5.mp4",
    "title": "Test video 1",
    "rate": 4,
    "shortDescription": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate porro, eos facere rerum aperiam officia quae vero velit delectus quasi.",
    "largeDescription": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur at quaerat omnis perferendis fuga laudantium esse in culpa, nam tempore fugiat odio quos assumenda molestias explicabo error est, nemo dolor corporis consequatur. Nobis distinctio numquam rem nihil totam qui aliquid, possimus ipsum optio fuga, nulla culpa rerum itaque repudiandae, et reprehenderit aut maxime ut magni! Cum libero consectetur vero illum ipsa quis blanditiis et ab quisquam. Et ipsa obcaecati perferendis dolores earum iste tempore fuga unde, inventore consequatur omnis? In pariatur quas, ullam laudantium consequuntur, ex dicta saepe, vel repudiandae voluptatibus neque reiciendis. Unde omnis, officia possimus dignissimos rem, architecto laborum deleniti nesciunt corporis consectetur velit aliquid. Magnam id non maxime facilis unde aliquid tempore quasi numquam sapiente illo, consectetur, sed praesentium ipsam dignissimos doloremque! Laboriosam provident dicta qui laudantium minus incidunt facilis quibusdam dolore eos id dignissimos, commodi a reiciendis nulla voluptatum esse cumque voluptatem ad sunt nemo obcaecati?",
    "access": "free",
    "genre": "Advanture",
    "year": "2017",
    "time": "0:01:00",
    "preview": "./img/preview.png"
},
{
    "url": "./video/VfE_html5.mp4",
    "title": "Test video 2",
    "rate": 5,
    "shortDescription": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate porro, eos facere rerum aperiam officia quae vero velit delectus quasi.",
    "largeDescription": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, dolorem id. Eveniet laborum velit fugiat maxime nisi ullam ea, ad minima nobis! Culpa perferendis dolorem repudiandae sequi facere iste rerum odit dicta consectetur nemo maiores fuga eligendi nesciunt ipsum delectus dolore odio totam praesentium, blanditiis incidunt porro voluptatum. Commodi blanditiis voluptatem harum. Atque, eos ex facere quis aliquam non error quidem alias delectus sit, maxime nobis ducimus. Sint totam asperiores provident animi minima ab mollitia, dicta illum nemo maiores dignissimos ipsa voluptatibus ut recusandae! Nemo deserunt, nobis et perferendis officiis dolores ex sunt nostrum laborum ipsam ducimus natus exercitationem ea vero inventore ad quisquam beatae dolorem consectetur autem dolore! Quam sint at minima officiis, neque veritatis asperiores ipsum quod distinctio culpa consequatur tenetur, nam rem optio nostrum sed aut non laborum repellat soluta nisi reprehenderit temporibus. Non esse, hic quas voluptas amet sint laborum explicabo ut quam laudantium rerum, tenetur!",
    "access": "pay",
    "genre": "Action",
    "year": "2018",
    "time": "0:01:00",
    "preview": "./img/preview.png"
},
{
    "url": "./video/VfE_html5.mp4",
    "title": "Test video 3",
    "rate": 3,
    "shortDescription": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate porro, eos facere rerum aperiam officia quae vero velit delectus quasi.",
    "largeDescription": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et eum repellendus, nisi minus vero vel dolores voluptatibus ab aspernatur accusantium voluptate quia! Reiciendis accusamus, debitis veritatis perferendis sequi id eius fuga vero dignissimos similique corporis adipisci officia ducimus optio dolorem libero commodi voluptas explicabo at unde ad. Quae modi doloribus, nulla recusandae porro veritatis commodi, et labore nihil dolor neque sint sequi vero quo nemo? Est asperiores deserunt nihil at modi omnis repudiandae rerum numquam libero amet ab nostrum ex similique nesciunt quae, molestiae et sit, consequuntur hic. Quibusdam, illo similique in placeat aliquam magni. Eius veritatis, sequi necessitatibus inventore quod minus sint ab alias, magni, magnam quo molestias voluptatem quibusdam error! Sequi exercitationem, obcaecati hic. Qui sequi rem, facere nostrum! Illo sed eveniet nostrum quod quae, minima fugit voluptates ad consectetur ipsa error odit voluptate doloremque obcaecati ut aperiam illum delectus labore veritatis maiores officiis optio vero quasi? Voluptatum.",
    "access": "free",
    "genre": "Comedy",
    "year": "2016",
    "time": "0:01:00",
    "preview": "./img/preview.png"
},
{
    "url": "./video/VfE_html5.mp4",
    "title": "Test video 4",
    "rate": 4,
    "shortDescription": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate porro, eos facere rerum aperiam officia quae vero velit delectus quasi.",
    "largeDescription": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus laborum, consectetur facere iusto deserunt voluptate nobis eius quaerat odio quas ex ipsum aperiam doloribus! Similique obcaecati, quasi autem et odio ab ipsa ducimus, corrupti nobis, delectus atque alias! Aliquam odio iure natus nostrum fuga quis voluptates, officiis itaque, nemo, eum quae! Mollitia quibusdam possimus quisquam nulla amet, animi odit autem. Sint quibusdam praesentium eveniet recusandae incidunt magnam dignissimos, rerum dolores optio suscipit eaque ipsam obcaecati! Inventore explicabo, nemo id aliquam cupiditate debitis reiciendis, alias cum numquam tenetur doloremque fugiat odit porro non animi soluta impedit fugit provident modi et ea odio quia dolores maiores. Nesciunt porro expedita ad nobis accusamus modi illo sint iusto necessitatibus, praesentium aspernatur, reprehenderit distinctio, delectus consectetur, cupiditate magni. Omnis totam eius quam aut quis expedita suscipit iusto deserunt consequuntur dignissimos alias minima dolorum neque, saepe, nihil, quae quos qui id ut! Aperiam, nesciunt, ab! Ab.",
    "access": "pay",
    "genre": "Horror",
    "year": "2017",
    "time": "0:01:00",
    "preview": "./img/preview.png"
},
{
    "url": "./video/VfE_html5.mp4",
    "title": "Test video 5",
    "rate": 5,
    "shortDescription": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate porro, eos facere rerum aperiam officia quae vero velit delectus quasi.",
    "largeDescription": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto explicabo aliquam repellat, nobis laborum quo voluptate quibusdam atque. Suscipit commodi voluptatibus similique quia, harum id sunt tempore fugit dolore enim sint dolorem atque quibusdam at officia amet architecto veritatis vero itaque, iure iusto in. Nostrum reiciendis facere sint ab perspiciatis possimus natus, iure necessitatibus? Deserunt, ducimus, ratione? Nisi voluptate laudantium tempore sapiente deserunt unde explicabo dicta ipsam cumque provident dolore, possimus rem ex alias ab hic rerum incidunt tempora illo id temporibus asperiores. Et explicabo suscipit doloribus sit incidunt. Natus inventore, perspiciatis id facilis! Voluptatum deleniti asperiores cupiditate placeat magnam eveniet, eaque esse nihil ipsa! Unde, voluptate, nisi! Cum ad, dolor neque doloremque maiores, impedit eveniet. Tempora ab, error maxime adipisci porro a quidem libero similique sapiente at, distinctio magni perspiciatis fuga voluptate molestias eligendi modi laborum facilis eum expedita dolorum cupiditate beatae. Reiciendis obcaecati, nobis. Laborum vel impedit rerum.",
    "access": "free",
    "genre": "Advanture",
    "year": "2017",
    "time": "0:01:00",
    "preview": "./img/preview.png"
},
{
    "url": "./video/VfE_html5.mp4",
    "title": "Test video 6",
    "rate": 3,
    "shortDescription": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate porro, eos facere rerum aperiam officia quae vero velit delectus quasi.",
    "largeDescription": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, doloremque eos similique ipsam, nisi laborum eaque ipsa vel. Voluptates architecto aspernatur expedita quo similique voluptas, laboriosam nihil officiis excepturi laborum veritatis repellendus nam dicta esse, autem consectetur assumenda enim qui nulla. Pariatur a officiis fugiat nesciunt, reprehenderit molestias facilis quia, veritatis molestiae, quod totam iure repellat exercitationem ipsam soluta! Consequatur unde quidem natus quae minus culpa illum ab, ea, at dignissimos deserunt temporibus quod soluta eos sequi omnis ipsam vero blanditiis cupiditate qui voluptatum nostrum. Atque vel libero temporibus maxime veniam perferendis laborum, rem, eius molestias cumque quis id repellat? Architecto explicabo dolorem vel maiores iste, aspernatur atque inventore. Odio laudantium ullam praesentium suscipit et, error minima omnis distinctio illum veritatis vel provident laborum voluptate quisquam hic natus id molestiae eveniet quidem adipisci repudiandae, vero! Quos sed fuga consectetur repellat dignissimos exercitationem numquam labore alias, et dolorem rerum nulla, ut!",
    "access": "pay",
    "genre": "Advanture",
    "year": "2017",
    "time": "0:01:00",
    "preview": "./img/preview.png"
},
{
    "url": "./video/VfE_html5.mp4",
    "title": "Test video 7",
    "rate": 4,
    "shortDescription": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate porro, eos facere rerum aperiam officia quae vero velit delectus quasi.",
    "largeDescription": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit unde aliquid voluptatum deleniti obcaecati et reiciendis eos odit ad aliquam, quas magnam quia earum possimus repudiandae, hic dignissimos deserunt ex, beatae dolor, cumque debitis suscipit nisi. Error voluptatibus vel illum facilis commodi, asperiores minima obcaecati similique, magni fuga doloribus vero numquam animi officiis quo incidunt quod sapiente ullam dicta! Molestias quibusdam dignissimos tempora amet, doloremque atque odio aperiam, temporibus officiis deserunt, sint iure totam dolorum aut fugiat, natus dolorem dolores sequi deleniti repellat sed ex. Deleniti saepe distinctio voluptate, perferendis. Architecto quidem magnam vitae id rem nobis quod eveniet doloremque soluta quibusdam earum minus reiciendis pariatur sapiente deleniti, provident, quas cum temporibus distinctio totam excepturi non autem. Beatae placeat illo, id inventore, voluptatibus possimus officia perspiciatis odio, magni sed quis nemo. Autem eum aperiam ipsum minima aliquid. Sequi dolorem maiores veritatis quod! Voluptas eum dolores vero quae nobis iure obcaecati?",
    "access": "free",
    "genre": "Advanture",
    "year": "2017",
    "time": "0:01:00",
    "preview": "./img/preview.png"
},
{
    "url": "./video/VfE_html5.mp4",
    "title": "Test video 8",
    "rate": 5,
    "shortDescription": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate porro, eos facere rerum aperiam officia quae vero velit delectus quasi.",
    "largeDescription": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur at, fugit id? Officiis, illo culpa perferendis. Aspernatur, velit, aliquam. In totam dolorum, modi, voluptas esse vitae nemo incidunt debitis dolor perferendis quasi eum quibusdam laudantium dicta maxime a aperiam expedita, recusandae repellendus. Molestiae nisi porro ipsum facilis possimus maxime odio blanditiis veritatis nam a harum, quos natus placeat, deserunt expedita, voluptate impedit illum et! Placeat vero repudiandae hic, eos iure doloremque architecto, error, voluptatem delectus soluta ipsa tenetur fugit commodi natus voluptatum in quidem. Laborum quasi, vel provident odit est nostrum. Commodi maxime qui voluptates consequatur ex quae earum doloremque iusto id. Accusamus sapiente veritatis, quam hic! Similique quia earum officiis molestias corrupti ratione sequi rerum ducimus qui sit amet maiores, asperiores perspiciatis, ullam error eaque. Voluptatum suscipit sunt qui deserunt veritatis sapiente fugiat maiores minima repudiandae soluta, distinctio maxime sit impedit omnis voluptatem quo corrupti quas aliquam amet tempora!",
    "access": "pay",
    "genre": "Action",
    "year": "2018",
    "time": "0:01:00",
    "preview": "./img/preview.png"
},
{
    "url": "./video/VfE_html5.mp4",
    "title": "Test video 9",
    "rate": 4,
    "shortDescription": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate porro, eos facere rerum aperiam officia quae vero velit delectus quasi.",
    "largeDescription": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta expedita sint voluptas, quod, dolorem natus magni alias ab voluptatem corporis aspernatur nisi similique amet nihil itaque adipisci deserunt rem perferendis repellat eaque cumque, harum dolore voluptate. Nisi sint excepturi hic est placeat. Doloremque ex inventore expedita nesciunt veritatis ut fuga reiciendis, totam omnis eos, quisquam aperiam dolorum consequatur repellendus numquam laboriosam corporis nihil laudantium dolorem sapiente vero, temporibus suscipit! Totam blanditiis aperiam, molestiae ipsa dolore aut autem ex beatae quos repudiandae soluta earum, magnam facere sequi aliquam perferendis reiciendis eum eaque incidunt ullam hic voluptas commodi architecto! Dolore ab, harum, quos magnam, quas tenetur iure natus vel praesentium vitae, nostrum veritatis nisi qui delectus maxime. Praesentium itaque sequi impedit corporis magni nihil mollitia dignissimos odit quis facere quaerat, consectetur voluptatem placeat nam perspiciatis deleniti quia, eligendi ex ullam ipsa est doloribus! Neque explicabo iste nulla, quasi suscipit eos. Rem, sit!",
    "access": "free",
    "genre": "Comedy",
    "year": "2016",
    "time": "0:01:00",
    "preview": "./img/preview.png"
},
{
    "url": "./video/VfE_html5.mp4",
    "title": "Test video 10",
    "rate": 4,
    "shortDescription": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate porro, eos facere rerum aperiam officia quae vero velit delectus quasi.",
    "largeDescription": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis quo, temporibus est asperiores beatae porro velit sapiente fugit iure iste. Esse assumenda facere, quisquam! Ullam consectetur repudiandae itaque officia laudantium. Qui totam ducimus, dignissimos alias quasi, repudiandae fuga amet cupiditate modi aliquam, dicta saepe. Nostrum deserunt eligendi, recusandae illum iste quas maxime tenetur architecto perferendis incidunt, sapiente saepe qui, repudiandae minus eius dignissimos iusto debitis laborum? Magnam perferendis, quae earum itaque possimus, laboriosam vel sint illum maxime ducimus error sunt temporibus explicabo molestias corrupti rem nulla ex alias sed animi, vero repudiandae. Optio ratione commodi eius veritatis rem, voluptatibus explicabo ab eligendi, sed nihil voluptas quia numquam ipsum laudantium assumenda iste suscipit, distinctio inventore repellendus iure quos quaerat tenetur aut consequatur! Sed at voluptatum repellendus, voluptate illo totam odit libero! Eligendi magni distinctio dolorum itaque dicta sapiente maxime quibusdam provident nam, similique quae eum quidem, unde placeat, deserunt repellat odit!",
    "access": "free",
    "genre": "Horror",
    "year": "2017",
    "time": "0:01:00",
    "preview": "./img/preview.png"
}
]