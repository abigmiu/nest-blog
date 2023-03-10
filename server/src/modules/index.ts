import { CommentModule } from './comment/comment.module';
import { ContentModule } from './content/content.module';
import { MetaModule } from './meta/meta.module';
import { OptionModule } from './option/option.module';

const modules = [MetaModule, OptionModule, ContentModule, CommentModule];
export default modules;
