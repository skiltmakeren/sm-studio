import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import companyService from "./docs/company-service";
import companyServiceSubCategory from "./docs/company-service-sub-category";
import customer from "./docs/customer";
import download from "./docs/download";
import downloadCategory from "./docs/download-category";
import employee from "./docs/employee";
import environmentPage from "./docs/environment-page";
import newsArticle from "./docs/news-article";
import whatWeDo from "./docs/what-we-do";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    companyService,
    companyServiceSubCategory,
    customer,
    download,
    downloadCategory,
    employee,
    environmentPage,
    newsArticle,
    whatWeDo,
  ]),
});
