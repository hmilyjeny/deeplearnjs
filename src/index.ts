/**
 * @license
 * Copyright 2017 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */

import * as xhr_dataset from './data/xhr-dataset';
import * as environment from './environment';
import * as conv_util from './math/conv_util';
import * as gpgpu_util from './math/webgl/gpgpu_util';
import * as render_ndarray_gpu_util from './math/webgl/render_ndarray_gpu_util';
import * as webgl_util from './math/webgl/webgl_util';
import * as test_util from './test_util';
import * as util from './util';

export {CheckpointLoader} from './data/checkpoint_loader';
export {DataStats, InMemoryDataset} from './data/dataset';
// tslint:disable-next-line:max-line-length
export {InCPUMemoryShuffledInputProviderBuilder, InGPUMemoryShuffledInputProviderBuilder, InputProvider} from './data/input_provider';
export {XhrDataset, XhrDatasetConfig, XhrModelConfig} from './data/xhr-dataset';
export {ENV, Environment, Features} from './environment';
export {Graph, Tensor} from './graph/graph';
export {AdadeltaOptimizer} from './graph/optimizers/adadelta_optimizer';
export {AdagradOptimizer} from './graph/optimizers/adagrad_optimizer';
export {MomentumOptimizer} from './graph/optimizers/momentum_optimizer';
export {Optimizer} from './graph/optimizers/optimizer';
export {RMSPropOptimizer} from './graph/optimizers/rmsprop_optimizer';
export {SGDOptimizer} from './graph/optimizers/sgd_optimizer';
export {AdamOptimizer} from './graph/optimizers/adam_optimizer';
export {CostReduction, FeedEntry, Session} from './graph/session';
// tslint:disable-next-line:max-line-length
export {GraphRunner, GraphRunnerEventObserver, MetricReduction} from './graph_runner';
// tslint:disable-next-line:max-line-length
export {ConstantInitializer, Initializer, NDArrayInitializer, OnesInitializer, RandomNormalInitializer, RandomTruncatedNormalInitializer, RandomUniformInitializer, VarianceScalingInitializer, ZerosInitializer} from './initializers';
export {MatrixOrientation, NDArrayMath} from './math/math';
export {NDArrayMathCPU} from './math/math_cpu';
export {NDArrayMathGPU} from './math/math_gpu';
// tslint:disable-next-line:max-line-length
export {Array1D, Array2D, Array3D, Array4D, NDArray, Scalar} from './math/ndarray';
export {GPGPUContext} from './math/webgl/gpgpu_context';
// Second level exports.
export {
  conv_util,
  environment,
  gpgpu_util,
  render_ndarray_gpu_util,
  test_util,
  util,
  webgl_util,
  xhr_dataset
};
